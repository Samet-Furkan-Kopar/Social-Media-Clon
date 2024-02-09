import Icon from "./Icon";
import { useState } from "react";
import classNames from "classnames";
import {AiFillCloseCircle} from  "react-icons/ai";
const Search = () => {
  const [open, setOpen] = useState(false);
    return (
        <div className="w-[268px] relative group">
            <span className={classNames({
              "absolute pointer-events-none text-[#8e8e8e] top-0 left-0 h-9 w-9 flex items-center justify-center":true,
              "hidden":open
            })}>
                <Icon name="search" size={24} />
            </span>
            <input onFocus={()=>setOpen(true)} onBlur={()=> setOpen(false)} className="pl-9 outline-none focus:pl-3 h-9 w-full rounded bg-[#efefef]" type="text" placeholder="Search" />
            <button onClick={() => setOpen(false)} className={classNames({
              "absolute hidden text-[#c7c7c7] right-0 top-0 h-9 w-9  items-center justify-center":true,
              "!flex":open
            })}>
                <AiFillCloseCircle  />
            </button>

        </div>
    );
};

export default Search;
