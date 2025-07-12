import Link from "next/link";

const applications = [
  {
    name: "Microsoft Word",
    icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
            <linearGradient id="Q7XamDf1hnh~bz~vAO7C6a_pGHcje298xSl_gr1" x1="28" x2="28" y1="14.966" y2="6.45" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#42a3f2"></stop><stop offset="1" stop-color="#42a4eb"></stop></linearGradient><path fill="url(#Q7XamDf1hnh~bz~vAO7C6a_pGHcje298xSl_gr1)" d="M42,6H14c-1.105,0-2,0.895-2,2v7.003h32V8C44,6.895,43.105,6,42,6z"></path><linearGradient id="Q7XamDf1hnh~bz~vAO7C6b_pGHcje298xSl_gr2" x1="28" x2="28" y1="42" y2="33.054" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#11408a"></stop><stop offset="1" stop-color="#103f8f"></stop></linearGradient><path fill="url(#Q7XamDf1hnh~bz~vAO7C6b_pGHcje298xSl_gr2)" d="M12,33.054V40c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2v-6.946H12z"></path><linearGradient id="Q7XamDf1hnh~bz~vAO7C6c_pGHcje298xSl_gr3" x1="28" x2="28" y1="-15.46" y2="-15.521" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3079d6"></stop><stop offset="1" stop-color="#297cd2"></stop></linearGradient><path fill="url(#Q7XamDf1hnh~bz~vAO7C6c_pGHcje298xSl_gr3)" d="M12,15.003h32v9.002H12V15.003z"></path><linearGradient id="Q7XamDf1hnh~bz~vAO7C6d_pGHcje298xSl_gr4" x1="12" x2="44" y1="28.53" y2="28.53" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d59b3"></stop><stop offset="1" stop-color="#195bbc"></stop></linearGradient><path fill="url(#Q7XamDf1hnh~bz~vAO7C6d_pGHcje298xSl_gr4)" d="M12,24.005h32v9.05H12V24.005z"></path><path d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z" opacity=".05"></path><path d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425	C25.333,34.603,23.936,36,22.213,36z" opacity=".07"></path><path d="M22.106,35H12V13.667h10.106c1.414,0,2.56,1.146,2.56,2.56V32.44C24.667,33.854,23.52,35,22.106,35z" opacity=".09"></path><linearGradient id="Q7XamDf1hnh~bz~vAO7C6e_pGHcje298xSl_gr5" x1="4.744" x2="23.494" y1="14.744" y2="33.493" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#256ac2"></stop><stop offset="1" stop-color="#1247ad"></stop></linearGradient><path fill="url(#Q7XamDf1hnh~bz~vAO7C6e_pGHcje298xSl_gr5)" d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z"></path><path fill="#fff" d="M18.403,19l-1.546,7.264L15.144,19h-2.187l-1.767,7.489L9.597,19H7.641l2.344,10h2.352l1.713-7.689	L15.764,29h2.251l2.344-10H18.403z"></path>
        </svg>,
    description: "Practice document formatting, styles, references, and more.",
    textColor: "text-blue-800",
  },
  {
    name: "Microsoft Excel",
    icon:<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
            <path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path>
        </svg>,
    description: "Master spreadsheet formulas, data analysis, charts, and functions.",
    textColor: "text-green-800",
  },
  {
    name: "Microsoft PowerPoint",
    icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
            <path fill="#dc4c2c" d="M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z"></path><path fill="#f7a278" d="M26,6v18h18C44,14.059,35.941,6,26,6z"></path><path fill="#c06346" d="M26,6C16.059,6,8,14.059,8,24h18V6z"></path><path fill="#9b341f" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z"></path>
         </svg>,
    description: "Create engaging slides, animations, and presentation elements.",
    textColor: "text-yellow-800",
  },
  {
    name: "Microsoft Access",
    icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
            <path fill="#881421" d="M42,29H12c0,0,0,8.657,0,9c0,2.761,6.716,5,15,5s15-2.239,15-5C42,37.657,42,29,42,29z"></path><path fill="#af2031" d="M42,19H12c0,0,0,9.657,0,10c0,2.761,6.716,5,15,5s15-2.239,15-5C42,28.657,42,19,42,19z"></path><path fill="#c94f60" d="M42,9.5H12c0,0,0,9.157,0,9.5c0,2.761,6.716,5,15,5s15-2.239,15-5C42,18.657,42,9.5,42,9.5z"></path><ellipse cx="27" cy="9.5" fill="#e08095" rx="15" ry="4.5"></ellipse><path d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z" opacity=".05"></path><path d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425	C25.333,34.603,23.936,36,22.213,36z" opacity=".07"></path><path d="M22.084,35.008l-10.106-0.021l0.044-21.333l10.106,0.021c1.414,0.003,2.558,1.152,2.555,2.566	L24.65,32.453C24.647,33.867,23.498,35.011,22.084,35.008z" opacity=".09"></path><linearGradient id="Nta8n8gK7TbMDl6yVHXsza_JdOSrU3pawBf_gr1" x1="4.586" x2="23.043" y1="14.586" y2="33.043" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bb273d"></stop><stop offset="1" stop-color="#9f1728"></stop></linearGradient><path fill="url(#Nta8n8gK7TbMDl6yVHXsza_JdOSrU3pawBf_gr1)" d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z"></path><path fill="#fff" d="M12.895,19.005h2.266l3.64,10H16.66l-0.802-2.385h-3.745l-0.788,2.385H9.199L12.895,19.005z M15.378,25.078l-1.165-3.619c-0.096-0.265-0.168-0.538-0.216-0.816h-0.042c-0.044,0.285-0.114,0.565-0.209,0.837l-1.179,3.598	H15.378z"></path>
        </svg>,
    description: "Learn database design, queries, forms, and reports.",
    textColor: "text-purple-800",
  },
];

const OfficeApps = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Practice Tests
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Master Microsoft Office Applications
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform covers all major Microsoft Office applications used in university courses.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((app, index) => (
              <div
                key={index}
                className="pt-6 pb-6 px-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                  <div className="h-6 w-20 mx-auto">
                    {app.icon}
                  </div>
                <h3 className="mt-16 text-lg leading-6 font-medium text-gray-900">
                  {app.name}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {app.description}
                </p>
                <div className="mt-4">
                  <Link
                    href="/tests"
                    className={`inline-flex items-center text-sm font-medium ${app.textColor}`}
                  >
                    View practice tests
                    <svg
                      className="ml-1 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeApps;
