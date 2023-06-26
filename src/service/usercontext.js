import React from 'react';

const UserContext = React.createContext(null);
// const [ contextValue , setContextValue ] = React.useState({  name: 'johnme',color:'#ccc', background:'pink' });


// const UserProvider = UserContext.Provider  //提供者
// export default function ProviderDemo(){
//     const [ contextValue , setContextValue ] = React.useState({  color:'#ccc', background:'pink' })
//     return <div>
//         <UserProvider value={ contextValue } > 
//             <Son />
//         </UserProvider>
//     </div>
// }

export default UserContext;
