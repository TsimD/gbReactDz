import React from 'react';
import CustomLink from "./CustomLink";
import '../style/Navbar.css'


const PrivatListNavigate = ({array}) => {
  return (
      <div className="navbar">
        {array.map((e, i) => {
          return (
              // <NavLink style={({isActive})=>({backgroundColor: isActive ? 'red': ''})} className="linkName" key={e.name} to={e.href} end>{e.name}</NavLink>
              // Вариант использования инлайн стиля для отображения активной ссылки

              <div className='contLink' key={i}>
                <CustomLink key={e.name} to={e.href} end>{e.name}</CustomLink>
              </div>

          )
        })}

      </div>
  );
};

export default PrivatListNavigate;
