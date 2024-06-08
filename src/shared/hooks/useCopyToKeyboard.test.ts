import { renderHook, act } from 'test';

import { useCopyToKeyboard, COPY_STATUS } from './useCopyToKeyboard';

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

describe('useCopyToKeyboard', () => {
  beforeEach(jest.clearAllMocks);

  it('should initially have NOT_COPIED status and corresponding text', () => {
    const { result } = renderHook(() => useCopyToKeyboard('Test text'));

    expect(result.current.status).toBe(COPY_STATUS.NOT_COPIED);
    expect(result.current.statusText).toBe('Tap to copy link');
  });

  it('should change status to COPIED and show corresponding text on successful copy', async () => {
    (navigator.clipboard.writeText as jest.Mock).mockResolvedValueOnce(null);
    const { result } = renderHook(() => useCopyToKeyboard('Test text'));

    await act(async () => {
      await result.current.copyText();
    });

    expect(result.current.status).toBe(COPY_STATUS.COPIED);
    expect(result.current.statusText).toBe('Link copied');
  });

  it('should change status to FAILED and show corresponding text on copy failure', async () => {
    (navigator.clipboard.writeText as jest.Mock).mockRejectedValueOnce(new Error('Failed to copy'));
    const { result } = renderHook(() => useCopyToKeyboard('Test text'));

    await act(async () => {
      await result.current.copyText();
    });

    expect(result.current.status).toBe(COPY_STATUS.FAILED);
    expect(result.current.statusText).toBe('Failed to copy link. Retry?');
  });

  it('should copy text to clipboard on Ctrl+C (or Cmd+C on Mac) keydown', async () => {
    const { result } = renderHook(() => useCopyToKeyboard('Test text'));

    const event = new KeyboardEvent('keydown', { key: 'c', ctrlKey: true });
    document.dispatchEvent(event);

    await act(async () => {});

    expect(navigator.clipboard.writeText as jest.Mock).toHaveBeenCalledWith('Test text');
    expect(result.current.status).toBe(COPY_STATUS.COPIED);
  });

  it('should not change status on key press other than Ctrl+C (or Cmd+C on Mac)', async () => {
    const { result } = renderHook(() => useCopyToKeyboard('Test text'));

    const event = new KeyboardEvent('keydown', { key: 'a' });
    document.dispatchEvent(event);

    await act(async () => {});

    expect(navigator.clipboard.writeText as jest.Mock).not.toHaveBeenCalled();
    expect(result.current.status).toBe(COPY_STATUS.NOT_COPIED);
  });
});
