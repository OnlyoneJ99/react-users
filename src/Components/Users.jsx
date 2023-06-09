const Users = ({ users }) => {
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {users.map((user, index) => {
                const { name, email, gen } = user;
                return (
                    <div className="card" key={index}>
                        <p>{name}</p>
                        <p>{email}</p>
                        <p>{gen}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Users