import React, { memo, useCallback } from 'react';
import { Result, Button } from 'antd';
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {}

const NotFound: React.FC<IProps> = props => {
  const { history } = props;
  const handleBackHome = useCallback(() => {
    history.push('/');
  }, [history]);
  return (
    <Result
      status="404"
      title="404"
      subTitle="您访问的页面丢失了"
      extra={
        <Button type="primary" onClick={handleBackHome}>
          Back Home
        </Button>
      }
    ></Result>
  );
};

export default memo(NotFound);
