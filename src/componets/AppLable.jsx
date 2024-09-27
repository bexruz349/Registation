import React from "react";

export const AppLable = ()=>{
    return(
        <label className="input-wrapper" htmlFor="username">
              Адрес элекроной почты 
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="registation123@gmail.com"
              />
              Пороль
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="********"
              />
              Подтвердите пороль
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="********"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
        </label>
        
        
    )
}