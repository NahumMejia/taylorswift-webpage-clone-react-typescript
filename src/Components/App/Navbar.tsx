import TayloSwiftLogo from '../../assets/TsLogo.png';

function NavBar(){
    return(
        <header className="flex justify-between items-center bg-mainColor px-4 w-full h-16">
                <img 
                    className=""
                    id="TaylorLogo"
                    src={TayloSwiftLogo}>
                </img>
        </header>
    )
}
export default NavBar;