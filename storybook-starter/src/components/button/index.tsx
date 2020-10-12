import React, { FC } from "react";

export interface ButtonProps {
  /**
   * 尺寸大小
   * @default big
   */
  scale: "small" | "normal" | "big";
  kind: "primary" | "secondary" | "cancel" | "dark" | "gray";
  outline: boolean;
  children?: React.ReactNode;
}

const ButtonComponent: FC<ButtonProps> = (props: ButtonProps) => {
  const { scale, kind, outline, children } = props;
  return (
    <div>
      {children}
    </div>
  );
};

interface ButtonItemProps {
  name: 'button-item'
}

const ButtonItem: FC<ButtonItemProps> = (props: ButtonItemProps) => {
  const { name } = props;
  return (
    <div>
      {name}
    </div>
  );
};

const Button = ButtonComponent as typeof ButtonComponent & { Item: typeof ButtonItem };

Button.Item = ButtonItem;

Button.defaultProps = {
  outline: false,
};

export { Button, ButtonItem };
export default Button;
