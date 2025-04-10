interface NavigationMenuItemType{
    text:string
    href:string
}
interface NavigationMenuPropsType{
    title:string
    items:NavigationMenuItemType[]
}

const NavigationMenu = ({title,items}: NavigationMenuPropsType) => {
  return <div className="text-white">{title}</div>;
};

export default NavigationMenu