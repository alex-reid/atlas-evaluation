import React from "react";
import styles from "./Tag.module.css";

/**
 * A simple Tag component.
 *
 * @param {Object} props - The props of the component.
 * @param {("small"|"medium"|"large")} [props.size] - Sets the size of the tag element. Possible values are "small", "medium", or "large".
 * @param {string} props.title - The title to display within the tag.
 * @param {string} [props.className] - Additional CSS classes to apply to the tag element.
 * @returns {JSX.Element} - The rendered tag element.
 */

const Tag = ({ size = "large", title, className }) => {
  return (
    <span
      className={`${styles.base} ${styles[size]} ${className ? className : ""}`}
    >
      {title}
    </span>
  );
};

export default Tag;
