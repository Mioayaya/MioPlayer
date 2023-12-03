import React, { FC, memo, useRef, useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

interface Iprops {
  children: React.ReactNode
}

const MioScrollReveal:FC<Iprops> = memo((props) => {
  const { children } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 创建 ScrollReveal 实例
    const sr = ScrollReveal();

    // 指定容器
    const container = containerRef.current;
    
    if (container) {
      // 使用 ScrollReveal 配置动画
      sr.reveal(container, {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: true,
      });
      console.log('render');
    }
  }, []);
  
  return <div ref={containerRef}>{children}</div>;
})

export default MioScrollReveal