import * as React from 'react';
import { FC } from 'react';

export interface BarProps {
  prefixCls: string;
}

export const Bar: FC<BarProps> = (props: BarProps) => {
  const { prefixCls } = props;
  return <div className={prefixCls}>Bar-new</div>;
};

export default Bar;
