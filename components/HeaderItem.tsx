import Link from "next/link";

export type HeaderItemProps = {
  link: string;
  title: string;
  classNames?: string;
};

export const HeaderItem = function (props: HeaderItemProps) {
  return (
    <Link href={`/${props.link}`}>
      <a
        className={
          props.classNames ? props.classNames : "text-lg transition duration-300 hover:text-orange-500"
        }>
        {props.title}
      </a>
    </Link>
  );
};

export default HeaderItem;
