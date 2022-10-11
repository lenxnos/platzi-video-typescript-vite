import './styles.scss';

interface Props {
  children: JSX.Element,
  title: string,
}

export function Categories({ children, title }: Props) {
  return (
    <div className="categories">
      <h3 className="categories__title">{title}</h3>
      {children}
    </div>
  );
}