import userIcon from '../assets/images/userIcon.png';
import { Switch } from '@/components/ui/switch';

const Navbar = ({ isDarkMode, toggleDarkMode }: {isDarkMode: boolean, toggleDarkMode: ()=> void}) => {

  return (
    <div className={`w-full flex items-center justify-center gap-[23rem] ${isDarkMode ? "text-zinc-300 bg-transparent" : "text-black bg-white"}`}>
      <ul className="flex items-center gap-12 text-[1rem]">
        <li>Category</li>
        <li>Lifestyle</li>
        <li>Books</li>
      </ul>

      <div>
        <Switch checked={isDarkMode} onClick={toggleDarkMode} />
      </div>

      <div className="flex items-center gap-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
        >
          <path
            d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
        >
          <path
            d="M12 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L21.0524 11.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M21 17.5V15C19 15 17.5 14 17.5 14C17.5 14 16 15 14 15V17.5C14 21 17.5 22 17.5 22C17.5 22 21 21 21 17.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <img src={userIcon} width={'40px'} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
