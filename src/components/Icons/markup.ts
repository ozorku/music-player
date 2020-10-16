export const getMarkup = (fill) => ({
  hamburger: `<svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1.55798H24.0199" stroke=${fill} stroke-width="2"/>
  <path d="M0 10.0503L24.0198 10.0503" stroke=${fill} stroke-width="2"/>
  </svg>`,
  hamburgerActive: `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.00659 1.34912L17.9912 18.3337" stroke=${fill} stroke-width="2"/>
  <path d="M1.00659 18.3337L17.9912 1.34911" stroke=${fill} stroke-width="2"/>
  </svg>
  `,
  magnifier: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 19.8041L13.8571 14.6613M8.71429 17.2327C4.4538 17.2327 1 13.7789 1 9.51842C1 5.25794 4.4538 1.80414 8.71429 1.80414C12.9748 1.80414 16.4286 5.25794 16.4286 9.51842C16.4286 13.7789 12.9748 17.2327 8.71429 17.2327Z" stroke=${fill} stroke-width="2"/>
  </svg>
  `,
  profile: `<svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4989 5.41905C12.4989 7.62695 10.7083 9.41645 8.49894 9.41645C6.28961 9.41645 4.49894 7.62695 4.49894 5.41905C4.49894 3.21116 6.28961 1.42166 8.49894 1.42166C10.7083 1.42166 12.4989 3.21116 12.4989 5.41905Z" stroke="#8996B8" stroke-opacity="0.6" stroke-width="2" stroke-linecap="square"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1656 20.0762H1.83228C1.83228 19.1294 1.83228 18.2288 1.83228 17.4132C1.83228 15.204 3.62314 13.4138 5.83228 13.4138H11.1656C13.3747 13.4138 15.1656 15.204 15.1656 17.4132C15.1656 18.2288 15.1656 19.1294 15.1656 20.0762Z" stroke="#8996B8" stroke-opacity="0.6" stroke-width="2" stroke-linecap="square"/>
  </svg>
  `,
  heart: `<svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.4987 17.755L9.79163 18.4621C9.97917 18.6496 10.2335 18.755 10.4987 18.755C10.764 18.755 11.0183 18.6496 11.2058 18.4621L10.4987 17.755ZM2.54612 9.80238L1.83901 10.5095H1.83901L2.54612 9.80238ZM9.21278 3.13572L8.50568 3.84282L8.50568 3.84282L9.21278 3.13572ZM10.4987 4.42167L9.79163 5.12878C10.1822 5.5193 10.8153 5.5193 11.2058 5.12878L10.4987 4.42167ZM11.7847 3.13572L11.0776 2.42861L11.0776 2.42861L11.7847 3.13572ZM11.2058 17.0479L3.25322 9.09528L1.83901 10.5095L9.79163 18.4621L11.2058 17.0479ZM17.7443 9.09528L9.79163 17.0479L11.2058 18.4621L19.1585 10.5095L17.7443 9.09528ZM8.50568 3.84282L9.79163 5.12878L11.2058 3.71456L9.91989 2.42861L8.50568 3.84282ZM11.2058 5.12878L12.4918 3.84282L11.0776 2.42861L9.79163 3.71456L11.2058 5.12878ZM15.118 0.755005C13.6026 0.755005 12.1492 1.35702 11.0776 2.42861L12.4918 3.84282C13.1883 3.1463 14.133 2.755 15.118 2.755V0.755005ZM18.8321 6.46905C18.8321 7.45408 18.4408 8.39876 17.7443 9.09528L19.1585 10.5095C20.2301 9.4379 20.8321 7.98451 20.8321 6.46905H18.8321ZM20.8321 6.46905C20.8321 3.31327 18.2738 0.755005 15.118 0.755005V2.755C17.1692 2.755 18.8321 4.41784 18.8321 6.46905H20.8321ZM5.87945 2.755C6.86448 2.755 7.80916 3.14631 8.50568 3.84282L9.91989 2.42861C8.8483 1.35702 7.39491 0.755005 5.87945 0.755005V2.755ZM2.16541 6.46905C2.16541 4.41784 3.82824 2.755 5.87945 2.755V0.755005C2.72367 0.755005 0.165405 3.31327 0.165405 6.46905H2.16541ZM3.25322 9.09528C2.5567 8.39876 2.16541 7.45408 2.16541 6.46905H0.165405C0.165405 7.98451 0.767417 9.4379 1.83901 10.5095L3.25322 9.09528Z" fill="#8996B8" fill-opacity="0.6"/>
  </svg>
  `,

  globe: `<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.49886 8.08833V7.08833C5.94658 7.08833 5.49886 7.53604 5.49886 8.08833H6.49886ZM6.49886 9.42166L7.20597 10.1288L7.49886 9.83587V9.42166H6.49886ZM4.22272 9.81219L3.51561 10.5193L3.51561 10.5193L4.22272 9.81219ZM9.16553 18.0883H10.1655V17.6741L9.87263 17.3812L9.16553 18.0883ZM7.83219 16.755H6.83219V17.1692L7.12509 17.4621L7.83219 16.755ZM7.83219 14.755H8.83219V14.3408L8.5393 14.0479L7.83219 14.755ZM6.49886 13.4217H5.49886V13.8359L5.79175 14.1288L6.49886 13.4217ZM6.49886 12.0883V11.0883C5.94658 11.0883 5.49886 11.536 5.49886 12.0883H6.49886ZM12.1655 1.42166V4.08833H14.1655V1.42166H12.1655ZM11.8322 4.42166H10.4989V6.42166H11.8322V4.42166ZM7.83219 7.08833H6.49886V9.08833H7.83219V7.08833ZM5.49886 8.08833V9.42166H7.49886V8.08833H5.49886ZM5.79175 8.71455L5.40123 9.10508L6.81544 10.5193L7.20597 10.1288L5.79175 8.71455ZM4.92982 9.10508L2.5393 6.71455L1.12509 8.12877L3.51561 10.5193L4.92982 9.10508ZM8.16553 6.75499C8.16553 6.93909 8.01629 7.08833 7.83219 7.08833V9.08833C9.12086 9.08833 10.1655 8.04366 10.1655 6.75499H8.16553ZM10.4989 4.42166C9.2102 4.42166 8.16553 5.46633 8.16553 6.75499H10.1655C10.1655 6.5709 10.3148 6.42166 10.4989 6.42166V4.42166ZM5.40123 9.10508C5.27105 9.23525 5.06 9.23525 4.92982 9.10508L3.51561 10.5193C4.42683 11.4305 5.90422 11.4305 6.81544 10.5193L5.40123 9.10508ZM12.1655 4.08833C12.1655 4.27242 12.0163 4.42166 11.8322 4.42166V6.42166C13.1209 6.42166 14.1655 5.37699 14.1655 4.08833H12.1655ZM10.1655 20.0883V18.0883H8.16553V20.0883H10.1655ZM9.87263 17.3812L8.5393 16.0479L7.12509 17.4621L8.45842 18.7954L9.87263 17.3812ZM8.83219 16.755V14.755H6.83219V16.755H8.83219ZM8.5393 14.0479L7.20597 12.7146L5.79175 14.1288L7.12509 15.4621L8.5393 14.0479ZM7.49886 13.4217V12.0883H5.49886V13.4217H7.49886ZM6.49886 13.0883H11.8322V11.0883H6.49886V13.0883ZM12.1655 13.4217V14.3105H14.1655V13.4217H12.1655ZM14.9433 17.0883H18.4989V15.0883H14.9433V17.0883ZM13.4989 15.6439C13.4989 16.4416 14.1456 17.0883 14.9433 17.0883V15.0883C15.2501 15.0883 15.4989 15.3371 15.4989 15.6439H13.4989ZM13.61 15.755C13.5486 15.755 13.4989 15.7052 13.4989 15.6439H15.4989C15.4989 14.6007 14.6532 13.755 13.61 13.755V15.755ZM12.1655 14.3105C12.1655 15.1083 12.8122 15.755 13.61 15.755V13.755C13.9168 13.755 14.1655 14.0037 14.1655 14.3105H12.1655ZM11.8322 13.0883C12.0163 13.0883 12.1655 13.2376 12.1655 13.4217H14.1655C14.1655 12.133 13.1209 11.0883 11.8322 11.0883V13.0883ZM10.4989 19.0883C5.89649 19.0883 2.16553 15.3574 2.16553 10.755H0.165527C0.165527 16.4619 4.79192 21.0883 10.4989 21.0883V19.0883ZM18.8322 10.755C18.8322 15.3574 15.1012 19.0883 10.4989 19.0883V21.0883C16.2058 21.0883 20.8322 16.4619 20.8322 10.755H18.8322ZM10.4989 2.42166C15.1012 2.42166 18.8322 6.15262 18.8322 10.755H20.8322C20.8322 5.04805 16.2058 0.421661 10.4989 0.421661V2.42166ZM10.4989 0.421661C4.79192 0.421661 0.165527 5.04805 0.165527 10.755H2.16553C2.16553 6.15262 5.89649 2.42166 10.4989 2.42166V0.421661Z" fill="#8996B8" fill-opacity="0.6"/>
  </svg>
  `,
  comment: `<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.16553 16.0787H6.16553V15.0787H5.16553V16.0787ZM5.16553 20.0761H4.16553C4.16553 20.4549 4.37947 20.8011 4.71817 20.9705C5.05688 21.1399 5.46223 21.1035 5.76528 20.8763L5.16553 20.0761ZM10.4989 16.0787V15.0787H10.1657L9.89911 15.2786L10.4989 16.0787ZM6.49886 5.75151H5.49886V7.75151H6.49886V5.75151ZM14.4989 7.75151H15.4989V5.75151H14.4989V7.75151ZM6.49886 9.74891H5.49886V11.7489H6.49886V9.74891ZM11.8322 11.7489H12.8322V9.74891H11.8322V11.7489ZM4.16553 16.0787V20.0761H6.16553V16.0787H4.16553ZM5.76528 20.8763L11.0986 16.8789L9.89911 15.2786L4.56578 19.2759L5.76528 20.8763ZM10.4989 17.0787H18.4989V15.0787H10.4989V17.0787ZM18.4989 17.0787C19.7878 17.0787 20.8322 16.0361 20.8322 14.7463H18.8322C18.8322 14.9302 18.6845 15.0787 18.4989 15.0787V17.0787ZM20.8322 14.7463V2.75411H18.8322V14.7463H20.8322ZM20.8322 2.75411C20.8322 1.46434 19.7878 0.421677 18.4989 0.421677V2.42168C18.6845 2.42168 18.8322 2.57019 18.8322 2.75411H20.8322ZM18.4989 0.421677H2.49886V2.42168H18.4989V0.421677ZM2.49886 0.421677C1.20988 0.421677 0.165527 1.46434 0.165527 2.75411H2.16553C2.16553 2.57019 2.31317 2.42168 2.49886 2.42168V0.421677ZM0.165527 2.75411V14.7463H2.16553V2.75411H0.165527ZM0.165527 14.7463C0.165527 16.0361 1.20988 17.0787 2.49886 17.0787V15.0787C2.31317 15.0787 2.16553 14.9302 2.16553 14.7463H0.165527ZM2.49886 17.0787H5.16553V15.0787H2.49886V17.0787ZM6.49886 7.75151H14.4989V5.75151H6.49886V7.75151ZM6.49886 11.7489H11.8322V9.74891H6.49886V11.7489Z" fill="#8996B8" fill-opacity="0.6"/>
  </svg>
  `,
  bulb: `<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.9332 9.38146L6.92315 9.52289L6.92315 9.52289L5.9332 9.38146ZM5.9198 9.47527L4.92985 9.33385L4.92985 9.33385L5.9198 9.47527ZM15.0646 9.38147L16.0545 9.24005L16.0545 9.24005L15.0646 9.38147ZM15.078 9.47528L14.088 9.6167L14.088 9.6167L15.078 9.47528ZM13.1656 17.4217V18.4217C13.7179 18.4217 14.1656 17.974 14.1656 17.4217H13.1656ZM7.83223 17.4217H6.83223C6.83223 17.974 7.27995 18.4217 7.83223 18.4217V17.4217ZM6.83955 12.9589L7.63035 12.3468L6.83955 12.9589ZM14.1582 12.9589L13.3674 12.3468L14.1582 12.9589ZM8.4989 21.0883H12.4989V19.0883H8.4989V21.0883ZM4.94325 9.24004L4.92985 9.33385L6.90974 9.6167L6.92315 9.52289L4.94325 9.24004ZM10.4989 4.42167C7.70605 4.42167 5.33821 6.47528 4.94325 9.24004L6.92315 9.52289C7.17736 7.74342 8.70135 6.42167 10.4989 6.42167V4.42167ZM16.0545 9.24005C15.6596 6.47528 13.2917 4.42167 10.4989 4.42167V6.42167C12.2964 6.42167 13.8204 7.74342 14.0746 9.52289L16.0545 9.24005ZM16.0679 9.33386L16.0545 9.24005L14.0746 9.52289L14.088 9.6167L16.0679 9.33386ZM14.949 13.5709C15.8412 12.4183 16.2935 10.9132 16.0679 9.33386L14.088 9.6167C14.2336 10.6361 13.9439 11.602 13.3674 12.3468L14.949 13.5709ZM12.1656 15.2901V17.4217H14.1656V15.2901H12.1656ZM13.1656 16.4217H7.83223V18.4217H13.1656V16.4217ZM8.83224 17.4217V15.2901H6.83223V17.4217H8.83224ZM4.92985 9.33385C4.70423 10.9132 5.15657 12.4183 6.04875 13.571L7.63035 12.3468C7.05388 11.602 6.76412 10.6361 6.90974 9.6167L4.92985 9.33385ZM8.83224 15.2901C8.83224 14.0751 8.1879 13.0672 7.63035 12.3468L6.04875 13.571C6.55063 14.2194 6.83223 14.7742 6.83223 15.2901H8.83224ZM13.3674 12.3468C12.8099 13.0671 12.1656 14.0751 12.1656 15.2901H14.1656C14.1656 14.7742 14.4472 14.2193 14.949 13.5709L13.3674 12.3468ZM9.4989 0.755005V3.42167H11.4989V0.755005H9.4989ZM0.498901 11.755H3.16557V9.755H0.498901V11.755ZM17.8322 11.755H20.4989V9.755H17.8322V11.755ZM5.20601 5.38123L3.20601 3.38123L1.79179 4.79544L3.79179 6.79544L5.20601 5.38123ZM17.206 6.79544L19.206 4.79544L17.7918 3.38123L15.7918 5.38123L17.206 6.79544Z" fill="#8996B8" fill-opacity="0.6"/>
  </svg>
  `,
  settings: `<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.42419 1.42167L8.30953 2.00394L7.87087 4.13456C7.16954 4.40239 6.53353 4.78217 5.95886 5.23254L3.81486 4.51566L3.23887 4.33712L2.94021 4.85144L1.46419 7.31913L1.16553 7.83354L1.60286 8.21594L3.26154 9.62699C3.20154 9.99608 3.12421 10.3612 3.12421 10.7489C3.12421 11.1366 3.20154 11.5018 3.26154 11.8709L1.60286 13.2819L1.16553 13.6643L1.46419 14.1787L2.94021 16.6464L3.23887 17.1621L3.81486 16.9822L5.95886 16.2653C6.53353 16.7157 7.16954 17.0954 7.87087 17.3632L8.30953 19.4939L8.42419 20.0762H12.5722L12.6882 19.4939L13.1255 17.3632C13.8269 17.0954 14.4629 16.7157 15.0375 16.2653L17.1815 16.9822L17.7575 17.1621L18.0575 16.6464L19.5322 14.1787L19.8322 13.6643L19.3935 13.2819L17.7349 11.8709C17.7962 11.5018 17.8722 11.1366 17.8722 10.7489C17.8722 10.3612 17.7962 9.99608 17.7349 9.62699L19.3935 8.21594L19.8322 7.83354L19.5322 7.31913L18.0575 4.85144L17.7575 4.33712L17.1815 4.51566L15.0375 5.23254C14.4629 4.78217 13.8269 4.40239 13.1255 4.13456L12.6882 2.00394L12.5722 1.42167H8.42419Z" stroke="#8996B8" stroke-opacity="0.6" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.165 10.7489C13.165 12.2199 11.9704 13.4139 10.4984 13.4139C9.02637 13.4139 7.83171 12.2199 7.83171 10.7489C7.83171 9.27786 9.02637 8.08402 10.4984 8.08402C11.9704 8.08402 13.165 9.27786 13.165 10.7489Z" stroke="#8996B8" stroke-opacity="0.6" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  </svg>
  `,
  rewind: `<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.4151 14.9779L17.8342 15.7935C18.1395 16.0109 18.5407 16.0396 18.8739 15.8679C19.207 15.6962 19.4164 15.3527 19.4164 14.9779H18.4151ZM18.4151 1.11215H19.4164C19.4164 0.737321 19.207 0.393883 18.8739 0.222135C18.5407 0.0503864 18.1395 0.079092 17.8342 0.296525L18.4151 1.11215ZM8.68008 8.04502L8.09922 7.22939C7.83541 7.41727 7.67876 7.72114 7.67876 8.04502C7.67876 8.36889 7.83541 8.67276 8.09922 8.86064L8.68008 8.04502ZM19.4164 14.9779V1.11215H17.4138V14.9779H19.4164ZM17.8342 0.296525L8.09922 7.22939L9.26093 8.86064L18.9959 1.92777L17.8342 0.296525ZM8.09922 8.86064L17.8342 15.7935L18.9959 14.1623L9.26093 7.22939L8.09922 8.86064ZM2.72783 15.6712V0.41886H0.725197V15.6712H2.72783Z" fill=${fill}/>
  </svg>
  `,
  rewindLarge: `<svg width="23" height="23" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.4151 14.9779L17.8342 15.7935C18.1395 16.0109 18.5407 16.0396 18.8739 15.8679C19.207 15.6962 19.4164 15.3527 19.4164 14.9779H18.4151ZM18.4151 1.11215H19.4164C19.4164 0.737321 19.207 0.393883 18.8739 0.222135C18.5407 0.0503864 18.1395 0.079092 17.8342 0.296525L18.4151 1.11215ZM8.68008 8.04502L8.09922 7.22939C7.83541 7.41727 7.67876 7.72114 7.67876 8.04502C7.67876 8.36889 7.83541 8.67276 8.09922 8.86064L8.68008 8.04502ZM19.4164 14.9779V1.11215H17.4138V14.9779H19.4164ZM17.8342 0.296525L8.09922 7.22939L9.26093 8.86064L18.9959 1.92777L17.8342 0.296525ZM8.09922 8.86064L17.8342 15.7935L18.9959 14.1623L9.26093 7.22939L8.09922 8.86064ZM2.72783 15.6712V0.41886H0.725197V15.6712H2.72783Z" fill=${fill}/>
  </svg>`,
  forward: `<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.95416 1.11226L2.53502 0.296641C2.2297 0.0792077 1.82851 0.0505018 1.49535 0.22225C1.16219 0.393998 0.952849 0.737437 0.952849 1.11226H1.95416ZM1.95416 14.978H0.952849C0.952849 15.3528 1.16219 15.6963 1.49535 15.868C1.82851 16.0398 2.2297 16.0111 2.53502 15.7936L1.95416 14.978ZM11.6892 8.04513L12.27 8.86075C12.5338 8.67288 12.6905 8.36901 12.6905 8.04513C12.6905 7.72126 12.5338 7.41739 12.27 7.22951L11.6892 8.04513ZM0.952849 1.11226V14.978H2.95548V1.11226H0.952849ZM2.53502 15.7936L12.27 8.86075L11.1083 7.22951L1.37331 14.1624L2.53502 15.7936ZM12.27 7.22951L2.53502 0.296641L1.37331 1.92788L11.1083 8.86075L12.27 7.22951ZM17.6414 0.418976V15.6713H19.644V0.418976H17.6414Z" fill=${fill}/>
  </svg>
  `,
  forwardLarge: `<svg width="23" height="23" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.95416 1.11226L2.53502 0.296641C2.2297 0.0792077 1.82851 0.0505018 1.49535 0.22225C1.16219 0.393998 0.952849 0.737437 0.952849 1.11226H1.95416ZM1.95416 14.978H0.952849C0.952849 15.3528 1.16219 15.6963 1.49535 15.868C1.82851 16.0398 2.2297 16.0111 2.53502 15.7936L1.95416 14.978ZM11.6892 8.04513L12.27 8.86075C12.5338 8.67288 12.6905 8.36901 12.6905 8.04513C12.6905 7.72126 12.5338 7.41739 12.27 7.22951L11.6892 8.04513ZM0.952849 1.11226V14.978H2.95548V1.11226H0.952849ZM2.53502 15.7936L12.27 8.86075L11.1083 7.22951L1.37331 14.1624L2.53502 15.7936ZM12.27 7.22951L2.53502 0.296641L1.37331 1.92788L11.1083 8.86075L12.27 7.22951ZM17.6414 0.418976V15.6713H19.644V0.418976H17.6414Z" fill=${fill}/>
  </svg>`,
  pause: `<svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.20251 0.315826V14.6909M7.59142 0.315826V14.6909" stroke=${fill} stroke-width="2.08334"/>
  </svg>
  `,
  pauseLarge: `<svg width="23" height="23" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.20251 0.315826V14.6909M7.59142 0.315826V14.6909" stroke=${fill} stroke-width="2.08334"/>
  </svg>`,
  back: `<svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.29077 7.38935L8.69077 0.989349M2.29077 7.38935L8.69077 13.7893M2.29077 7.38935H22.2908" stroke=${fill} stroke-width="2"/>
  </svg>
  `,
  filter: `<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24.8907 4.98934L11.2907 4.98934M11.2907 4.98934C11.2907 3.22203 9.85806 1.78934 8.09075 1.78934C6.32344 1.78934 4.89075 3.22203 4.89075 4.98934M11.2907 4.98934C11.2907 6.75665 9.85806 8.18934 8.09075 8.18934C6.32344 8.18934 4.89075 6.75665 4.89075 4.98934M4.89075 4.98934L0.890747 4.98934M24.8907 17.7893L20.8907 17.7893M20.8907 17.7893C20.8907 16.022 19.4581 14.5893 17.6907 14.5893C15.9234 14.5893 14.4907 16.022 14.4907 17.7893M20.8907 17.7893C20.8907 19.5566 19.4581 20.9893 17.6907 20.9893C15.9234 20.9893 14.4907 19.5566 14.4907 17.7893M14.4907 17.7893L0.890747 17.7893" stroke=${fill} stroke-width="2"/>
  </svg>
  `,
  volumne: `<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.25891 13.0459L5.6446 12.4027L5.46653 12.2959H5.25891V13.0459ZM5.25891 5.05113V5.80113H5.46653L5.6446 5.69437L5.25891 5.05113ZM11.9256 1.05374H12.6756C12.6756 0.783576 12.5303 0.534289 12.2952 0.401145C12.0601 0.268001 11.7716 0.271578 11.5399 0.410511L11.9256 1.05374ZM11.9256 17.0433L11.5399 17.6865C11.7716 17.8255 12.0601 17.8291 12.2952 17.6959C12.5303 17.5628 12.6756 17.3135 12.6756 17.0433H11.9256ZM5.25891 12.2959H2.59224V13.7959H5.25891V12.2959ZM2.59224 12.2959C2.26951 12.2959 2.00891 12.0351 2.00891 11.7135H0.508911C0.508911 12.8655 1.44298 13.7959 2.59224 13.7959V12.2959ZM2.00891 11.7135V6.3836H0.508911V11.7135H2.00891ZM2.00891 6.3836C2.00891 6.06191 2.26951 5.80113 2.59224 5.80113V4.30113C1.44298 4.30113 0.508911 5.23158 0.508911 6.3836H2.00891ZM2.59224 5.80113H5.25891V4.30113H2.59224V5.80113ZM5.6446 5.69437L12.3113 1.69697L11.5399 0.410511L4.87322 4.4079L5.6446 5.69437ZM11.1756 1.05374V17.0433H12.6756V1.05374H11.1756ZM12.3113 16.4001L5.6446 12.4027L4.87322 13.6892L11.5399 17.6865L12.3113 16.4001ZM13.8422 7.05374V11.0537H15.3422V7.05374H13.8422Z" fill=${fill} fill-opacity="0.6"/>
  </svg>
  `,
  repeat: `<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.42616 3.88707H11.7595V5.37874C11.7595 5.75374 12.2095 5.93707 12.4678 5.67041L14.7928 3.34541C14.9595 3.17874 14.9595 2.92041 14.7928 2.75374L12.4678 0.428741C12.4091 0.371156 12.3346 0.332248 12.2538 0.316922C12.1729 0.301596 12.0894 0.310538 12.0136 0.34262C11.9379 0.374702 11.8733 0.428489 11.8281 0.497202C11.7829 0.565915 11.759 0.64648 11.7595 0.728741V2.22041H2.59282C2.13449 2.22041 1.75949 2.59541 1.75949 3.05374V6.38707C1.75949 6.84541 2.13449 7.22041 2.59282 7.22041C3.05116 7.22041 3.42616 6.84541 3.42616 6.38707V3.88707ZM11.7595 12.2204H3.42616V10.7287C3.42616 10.3537 2.97616 10.1704 2.71782 10.4371L0.392822 12.7621C0.226156 12.9287 0.226156 13.1871 0.392822 13.3537L2.71782 15.6787C2.77657 15.7363 2.85105 15.7752 2.93187 15.7906C3.01269 15.8059 3.09624 15.7969 3.17199 15.7649C3.24774 15.7328 3.3123 15.679 3.35753 15.6103C3.40276 15.5416 3.42664 15.461 3.42616 15.3787V13.8871H12.5928C13.0512 13.8871 13.4262 13.5121 13.4262 13.0537V9.72041C13.4262 9.26207 13.0512 8.88707 12.5928 8.88707C12.1345 8.88707 11.7595 9.26207 11.7595 9.72041V12.2204Z" fill=${fill} fill-opacity="0.6"/>
  </svg>
  `,
  shuffle: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.9922 4.81208C11.9922 5.03309 12.08 5.24505 12.2363 5.40133C12.3925 5.55761 12.6045 5.64541 12.8255 5.64541C13.0465 5.64541 13.2585 5.55761 13.4148 5.40133C13.571 5.24505 13.6588 5.03309 13.6588 4.81208V1.22041C13.6588 0.999395 13.571 0.787434 13.4148 0.631153C13.2585 0.474873 13.0465 0.387075 12.8255 0.387075H9.24218C9.02116 0.387075 8.8092 0.474873 8.65292 0.631153C8.49664 0.787434 8.40884 0.999395 8.40884 1.22041C8.40884 1.44142 8.49664 1.65338 8.65292 1.80966C8.8092 1.96594 9.02116 2.05374 9.24218 2.05374H10.8172L6.99218 5.87874L2.12551 1.02041C1.96609 0.883887 1.76103 0.812548 1.5513 0.820649C1.34157 0.82875 1.14262 0.915694 0.994208 1.06411C0.845796 1.21252 0.758852 1.41147 0.750751 1.6212C0.74265 1.83093 0.813989 2.03599 0.950511 2.19541L5.80884 7.05374L0.567177 12.2954C0.48907 12.3729 0.427075 12.465 0.384768 12.5666C0.342461 12.6681 0.320679 12.7771 0.320679 12.8871C0.320679 12.9971 0.342461 13.106 0.384768 13.2076C0.427075 13.3091 0.48907 13.4013 0.567177 13.4787C0.644646 13.5568 0.736814 13.6188 0.838363 13.6612C0.939913 13.7035 1.04883 13.7252 1.15884 13.7252C1.26885 13.7252 1.37778 13.7035 1.47932 13.6612C1.58087 13.6188 1.67304 13.5568 1.75051 13.4787L11.9922 3.23708V4.81208Z" fill=${fill} fill-opacity="0.6"/>
  <path d="M12.8255 8.45374C12.6045 8.45374 12.3925 8.54154 12.2362 8.69782C12.0799 8.8541 11.9921 9.06606 11.9921 9.28708V10.8787L9.67548 8.55374C9.51856 8.39682 9.30573 8.30867 9.08381 8.30867C8.8619 8.30867 8.64907 8.39682 8.49215 8.55374C8.33523 8.71066 8.24707 8.92349 8.24707 9.14541C8.24707 9.36733 8.33523 9.58016 8.49215 9.73708L10.8005 12.0537H9.23381C9.0128 12.0537 8.80084 12.1415 8.64456 12.2978C8.48828 12.4541 8.40048 12.6661 8.40048 12.8871C8.40048 13.1081 8.48828 13.3201 8.64456 13.4763C8.80084 13.6326 9.0128 13.7204 9.23381 13.7204H12.8255C12.9431 13.7211 13.0595 13.6969 13.1671 13.6495C13.2747 13.602 13.371 13.5322 13.4497 13.4449C13.5284 13.3575 13.5877 13.2545 13.6238 13.1425C13.6598 13.0306 13.6718 12.9123 13.6588 12.7954V9.28708C13.6588 9.06606 13.571 8.8541 13.4147 8.69782C13.2585 8.54154 13.0465 8.45374 12.8255 8.45374Z" fill=${fill} fill-opacity="0.6"/>
  </svg>
  `,
});
