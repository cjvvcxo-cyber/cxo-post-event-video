import React from 'react';
import {Composition} from 'remotion';
import {CxoEventVideo, calculateMetadata, defaultProps} from './Video';
export const RemotionRoot: React.FC = () => <Composition id="CxoLinkedIn" component={CxoEventVideo} width={1080} height={1350} fps={30} durationInFrames={2400} defaultProps={defaultProps} calculateMetadata={calculateMetadata}/>;
