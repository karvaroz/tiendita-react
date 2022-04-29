import React from "react";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="italic ml-3 text-3xl text-orange-600 font-bold">
            Tiendita
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="flex mr-5 hover:text-gray-900">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 13.0981 17.9843 16.1042 15.774 18.4373C14.6894 19.5822 13.6013 20.5195 12.7833 21.1708C12.4789 21.4133 12.213 21.6152 12 21.7726C11.787 21.6152 11.5211 21.4133 11.2167 21.1708C10.3987 20.5195 9.31061 19.5822 8.22595 18.4373C6.01574 16.1042 4 13.0981 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315ZM11.4448 23.8317C11.445 23.8319 11.4453 23.8321 12 23L11.4453 23.8321C11.7812 24.056 12.2188 24.056 12.5547 23.8321L12 23C12.5547 23.8321 12.555 23.8319 12.5552 23.8317L12.556 23.8312L12.5581 23.8298L12.5648 23.8253L12.5877 23.8098C12.6072 23.7966 12.6349 23.7776 12.6704 23.753C12.7415 23.7038 12.8435 23.6321 12.9722 23.5392C13.2295 23.3534 13.5936 23.0822 14.0292 22.7354C14.8987 22.043 16.0606 21.0428 17.226 19.8127C19.5157 17.3958 22 13.9019 22 10C22 7.34784 20.9464 4.8043 19.0711 2.92893C17.1957 1.05357 14.6522 0 12 0C9.34784 0 6.8043 1.05357 4.92893 2.92893C3.05357 4.8043 2 7.34784 2 10C2 13.9019 4.48426 17.3958 6.77405 19.8127C7.93939 21.0428 9.10133 22.043 9.97082 22.7354C10.4064 23.0822 10.7705 23.3534 11.0278 23.5392C11.1565 23.6321 11.2585 23.7038 11.3296 23.753C11.3651 23.7776 11.3928 23.7966 11.4123 23.8098L11.4352 23.8253L11.4419 23.8298L11.444 23.8312L11.4448 23.8317ZM10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6Z"
                fill="orangered"
              />
            </svg>
            México City Marriott Reforma Hotel...
          </a>
        </nav>
        <button className="inline-flex items-center bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1007_479)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H4.18032L5.01195 6.15508C5.01638 6.18353 5.02201 6.21159 5.02879 6.2392L6.69916 14.5848L6.69933 14.5857C6.83664 15.2759 7.21225 15.8959 7.76048 16.3373C8.3062 16.7766 8.98837 17.011 9.68864 17H19.3914C20.0916 17.011 20.7738 16.7766 21.3195 16.3373C21.868 15.8958 22.2437 15.2754 22.3808 14.5848L22.3809 14.5848L22.3823 14.5773L23.9823 6.18733C24.0381 5.89458 23.9605 5.59218 23.7705 5.36256C23.5805 5.13293 23.298 5 23 5H6.82043L5.98055 0.803743C5.88701 0.336385 5.47663 0 5 0H1ZM8.66055 14.1937L7.22073 7H21.7913L20.4185 14.1984C20.3723 14.4273 20.2474 14.6328 20.0654 14.7793C19.8826 14.9265 19.6538 15.0047 19.4192 15.0002L19.4 15H9.68L9.66084 15.0002C9.42619 15.0047 9.19743 14.9265 9.01461 14.7793C8.83179 14.6322 8.70656 14.4254 8.66084 14.1952L8.66055 14.1937ZM7 21C7 19.8954 7.89543 19 9 19C10.1046 19 11 19.8954 11 21C11 22.1046 10.1046 23 9 23C7.89543 23 7 22.1046 7 21ZM18 21C18 19.8954 18.8954 19 20 19C21.1046 19 22 19.8954 22 21C22 22.1046 21.1046 23 20 23C18.8954 23 18 22.1046 18 21Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1007_479">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;