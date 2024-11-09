import {BsThreeDotsVertical} from "react-icons/bs";

const UserCard = ({name, email}) => {

    return (
        <>
            <div className="border-0 border-b-2 p-4 flex items-center justify-between">
               <div>
                   <div>Name: {name}</div>
                   <div>Email: {email}</div>
               </div>
                   <div>
                       <BsThreeDotsVertical />
                   </div>
            </div>
        </>
    );
};

export default UserCard;
