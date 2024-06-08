import React from 'react';

import { Share2Icon, Link2Icon } from '@radix-ui/react-icons';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
  FacebookIcon,
  XIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';

import { useBoolean, useCopyToKeyboard, COPY_STATUS } from 'shared/hooks';

import {
  ShareButton,
  Modal,
  Heading,
  Body,
  Subtitle,
  CloseButton,
  HeadingRow1,
  Footer,
  LinkWrapper,
  NeutralStatus,
  SuccessStatus,
  FailedStatus,
} from './index.styles';

const iconProps = {
  size: 40,
  borderRadius: 25,
};

type SocialSharePropTypes = {
  url: string;
  title: string;
};

const STATUS_NODES = {
  [COPY_STATUS.NOT_COPIED]: NeutralStatus,
  [COPY_STATUS.COPIED]: SuccessStatus,
  [COPY_STATUS.FAILED]: FailedStatus,
};

export function SocialShare({ url, title }: SocialSharePropTypes) {
  const [open, { toggle }] = useBoolean();
  const { copyText, status, statusText } = useCopyToKeyboard(url);

  const StatusNode = STATUS_NODES[status];

  return (
    <>
      <ShareButton onClick={toggle} className="share-btn">
        <Share2Icon />
        <span>Share</span>
      </ShareButton>

      <Modal open={open} onClose={toggle} closeOnClickOutside>
        <Heading>
          <HeadingRow1>
            <p>Share</p>
            <CloseButton>Cancel</CloseButton>
          </HeadingRow1>
          <Subtitle>Images maybe subject to copyright.</Subtitle>
        </Heading>

        <Body>
          <FacebookShareButton url={url} title={title}>
            <FacebookIcon {...iconProps} />
          </FacebookShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon {...iconProps} />
          </WhatsappShareButton>
          <TwitterShareButton url={url} title={title}>
            <XIcon {...iconProps} />
          </TwitterShareButton>
          <EmailShareButton
            url={url}
            subject={title}
            body="Sent from x10 search engine"
            title={title}
          >
            <EmailIcon {...iconProps} />
          </EmailShareButton>
        </Body>

        <Footer onClick={copyText}>
          <StatusNode>{statusText}</StatusNode>
          <LinkWrapper>
            <span>{url}</span>
            <Link2Icon role="button" />
          </LinkWrapper>
        </Footer>
      </Modal>
    </>
  );
}
