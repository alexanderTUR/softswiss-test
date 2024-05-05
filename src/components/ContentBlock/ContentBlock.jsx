import classes from './ContentBlock.module.scss';

export const ContentBlock = ({ heading, children }) => {
  return (
    <section className={classes['content-block']}>
      <div className={classes['content-block__container']}>
        <h2 className={classes['content-block__heading']}>{heading}</h2>
        {children}
      </div>
    </section>
  );
};
