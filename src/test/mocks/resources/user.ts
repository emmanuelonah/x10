import { http, HttpResponse } from 'msw';

export const user = http.get('/user', () => {
  return HttpResponse.json({ name: 'John Maverick' });
});
