import React from 'react';

const UserEdit = () => {
    return(
        <>
            <form>
                <label>Username:<input placeholder="User1"/></label> <br />
                <label>Bio:<input placeholder="Coder, Student, Tired"/></label> <br />
                <label>Visibility:<input placeholder="Public"/></label> <br />
                <label>Contact:<input placeholder="ThatFool"/></label> <br />
                <label>Location:<input placeholder="React"/></label> <br />
            </form>
        </>
    ) 
}

export default UserEdit;