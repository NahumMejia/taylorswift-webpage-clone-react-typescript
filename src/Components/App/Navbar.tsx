import TaylorSwiftLogo from '../../assets/TsLogo.png';

function NavBar() {
    return (
        <header className="flex items-center mt-1 ml-2 px-6 w-full h-20.5">
            <img
                className="pt-3 h-full max-h-full"
                id="TaylorLogo"
                src={TaylorSwiftLogo}
                alt="Taylor Swift Logo"
            />
            <hr className="mt-2 ml-4 border-secondaryColor border-t-3 w-[355px]" />
            <div className='flex space-x-3 mt-2 ml-4 font-taylor text-[28px] text-secondaryColor'>
                <ol>Shop /</ol>
                <ol>My Letter /</ol>
                <ol>Archive /</ol>
                <ol>Directed Projects /</ol>
                <ol>Sign Up </ol>
            </div>

            <hr className="mt-2 ml-4 border-secondaryColor border-t-3 w-[50px]" />
        </header>
    );
}
export default NavBar;