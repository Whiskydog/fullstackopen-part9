const Header = ({ name }: HeaderProps) => {
  return <h1>{name}</h1>;
};

interface HeaderProps {
  name: string;
}

export default Header;
