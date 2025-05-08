import { Component } from 'solid-js';
import potSVG from '../../assets/cooking-pot.svg';
import styles from './ComingSoon.module.css';

const ComingSoon: Component = () => {
  console.log(styles)
  return (
    <>
      <div class={styles["comingsoon-container"]}>
        <div class={styles["comingsoon-content"]}>
          <img src={potSVG} alt="Cooking Pot" class={styles["comingsoon-pot"]}/>
          <h1 class={styles["comingsoon-title"]}>
            Something is cooking...
          </h1>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
