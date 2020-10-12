import React, { FC } from 'react';

export interface ButtonProps {
  /**
   * 按钮文案
   */
  label: string;
  /**
   * 背景颜色
   */
  backgroundColor: string;
}

const ButtonComponent: FC<ButtonProps> = (props: ButtonProps) => {
  const { label, backgroundColor } = props;
  return (
    <button type="button" style={{
      backgroundColor: backgroundColor
    }}>
      {label}
    </button>
  )
};
ButtonComponent.defaultProps = {
  backgroundColor: 'pink'
}

interface ButtonItemProps {
  /** 名称 */
  name: string;
}

const ButtonItem: FC<ButtonItemProps> = (props: ButtonItemProps) => {
  const { name } = props;
  return (
    <div>
      {name}
    </div>
  );
};
ButtonItem.defaultProps = {
  name: '子按钮'
}



const Button = ButtonComponent as typeof ButtonComponent & { Item: typeof ButtonItem };

Button.Item = ButtonItem;

export { Button, ButtonItem, ButtonComponent };
export default Button;