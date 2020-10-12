import * as React from 'react';
import { FC } from 'react';

export interface FooProps {
  /**
   * 默认活跃 Tab
   */
  defaultActiveIndex: number;
  /**
   * index 发生改变的回调
   */
  onChange?: (index: number) => void;
}

export interface FooItemProps {
  /**
   * 是否选中
   */
  active: boolean;
}

const FooItem: FC<FooItemProps> = (props: FooItemProps) => {
  const { active } = props;
  return <div className="cs-foo-item">{active}</div>;
};

class Foo extends React.Component<FooProps> {
  static Item: typeof FooItem = FooItem;

  render() {
    return (
      <div className="cs-foo">
        <div className="cs-foo-content">Foo-new</div>
      </div>
    );
  }
}

export { Foo, FooItem };

export default Foo;
