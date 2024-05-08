import style from "./entry-header.module.css";

export default function EntryHeader({ title, date, author }) {
  return (
    <div className={style.entry}>
      {title && (
        <h2 className="text-3xl font-bold text-primary-600">{title}</h2>
      )}

      {date && author && (
        <div className="text-3xl font-bold">
          By {author} on <time>{new Date(date).toDateString()}</time>
        </div>
      )}
    </div>
  );
}
