import React from 'react';
import { useRouter } from 'next/router';

const newThings = () => {
  const router = useRouter();

  console.log(router); // router 객체 내 정보들 확인 가능

  const newsId = router.query.newId;

  return <div>newThings</div>;
};

export default newThings;
