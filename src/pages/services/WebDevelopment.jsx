import React from "react";
import { Link } from "react-router";

const WebDevelopment = () => {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="48"
          height="48"
        >
          <defs>
            <linearGradient id="grad-main" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="grad-accent" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>

          <rect
            x="6"
            y="8"
            width="52"
            height="34"
            rx="3.5"
            fill="url(#grad-main)"
          />
          <rect
            x="10.5"
            y="12.5"
            width="45"
            height="25"
            rx="2.5"
            fill="#041025"
            opacity="0.96"
          />
          <rect
            x="14"
            y="16"
            width="36"
            height="6"
            rx="1"
            fill="#0ea5b7"
            opacity="0.16"
          />
          <rect
            x="14"
            y="24"
            width="16"
            height="10"
            rx="1"
            fill="#4f46e5"
            opacity="0.12"
          />
          <rect
            x="34"
            y="24"
            width="16"
            height="10"
            rx="1"
            fill="#60a5fa"
            opacity="0.12"
          />
          <rect
            x="26"
            y="44"
            width="12"
            height="3.5"
            rx="1.5"
            fill="#081226"
            opacity="0.95"
          />
          <rect
            x="18"
            y="48"
            width="28"
            height="3"
            rx="1.5"
            fill="#081226"
            opacity="0.6"
          />
          <g transform="translate(44,10) rotate(18)">
            <path
              d="M0 0 L7 3 L10 6 L6 10 L3 7 L0 0 Z"
              fill="url(#grad-accent)"
            />
            <path d="M7.5 4.5 L9 6 L7 7 L5.5 5.5 Z" fill="#fff" opacity="0.9" />
          </g>
        </svg>
      ),
      title: "কাস্টম ওয়েব ডিজাইন",
      description: "আপনার ব্র্যান্ডের জন্য ইউনিক ডিজাইন",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="64"
          height="64"
          role="img"
          aria-label="Swift Loading Icon"
        >
          <defs>
            <linearGradient id="swift-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
          </defs>

          {/* <!-- Outer spinning ring --> */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#swift-grad)"
            strokeWidth="6"
            fill="none"
            strokeDasharray="70 30"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;360 50 50"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* <!-- Inner lightning bolt --> */}
          <path
            d="M50 25 L43 55 L54 55 L47 75 L64 45 L52 45 Z"
            fill="url(#swift-grad)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;10 50 50;-10 50 50;0 50 50"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      ),
      title: "দ্রুত লোডিং",
      description: "হাই পারফরমেন্স অপটিমাইজেশন",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          width="64"
          height="64"
        >
          <path d="M0,304.112V28.56c0-4.896,4.184-8.888,9.288-8.888h436.536c5.104,0,9.288,4,9.288,8.888v275.552H0z" />
          <g>
            <path
              fill="#999999"
              d="M455.112,304.112v37.92c0,5.216-4.184,9.488-9.288,9.488H9.288C4.184,351.528,0,347.256,0,342.048 v-37.92L455.112,304.112L455.112,304.112z"
            />
            <polygon
              fill="#999999"
              points="161.184,417.896 293.92,417.896 284.448,351.528 170.664,351.528"
            />
          </g>
          <g>
            <polygon
              fill="#636363"
              points="284.448,351.528 170.664,351.528 164.76,392.888 286.656,366.992"
            />
            <rect
              x={128}
              y={417.92}
              fill="#636363"
              width={199.112}
              height={9.48}
            />
          </g>
          <rect
            x={55.512}
            y={59.144}
            fill="#999999"
            width={156.104}
            height={88.8}
          />
          <rect
            x={55.512}
            y={175.848}
            fill="#E50914"
            width={156.104}
            height={88.8}
          />
          <rect
            x={243.496}
            y={59.144}
            fill="#999999"
            width={156.104}
            height={88.8}
          />
          <rect
            x={243.496}
            y={175.848}
            fill="#E50914"
            width={156.104}
            height={88.8}
          />
          <path d="M503.216,492.328H356.8c-4.832,0-8.784-3.952-8.784-8.784V208.28c0-4.832,3.952-8.784,8.784-8.784h146.416 c4.832,0,8.784,3.952,8.784,8.784v275.264C512,488.376,508.048,492.328,503.216,492.328z" />
          <rect x={356.8} y={222.928} width={146.416} height={234.24} />
          <g>
            <path
              fill="#999999"
              d="M447.424,214.136h-35.136c-1.608,0-2.928-1.32-2.928-2.928l0,0c0-1.608,1.32-2.928,2.928-2.928 h35.136c1.608,0,2.928,1.32,2.928,2.928l0,0C450.352,212.824,449.032,214.136,447.424,214.136z"
            />
            <path
              fill="#999999"
              d="M447.576,474.76H412.44c-1.608,0-2.928-1.32-2.928-2.928l0,0c0-1.608,1.32-2.928,2.928-2.928h35.136 c1.608,0,2.928,1.32,2.928,2.928l0,0C450.504,473.44,449.184,474.76,447.576,474.76z"
            />
            <rect
              x={374.376}
              y={243.848}
              fill="#999999"
              width={50.344}
              height={46.76}
            />
            <rect
              x={435.28}
              y={243.848}
              fill="#999999"
              width={50.344}
              height={46.76}
            />
          </g>
          <g>
            <rect
              x={374.376}
              y={302.184}
              fill="#E50914"
              width={50.344}
              height={46.76}
            />
            <rect x={435.28} fill="#E50914" width={50.344} height={46.76} />
          </g>
          <g>
            <rect
              x={374.376}
              y={431.528}
              fill="#FFFFFF"
              width={111.272}
              height={4.744}
            />
            <rect
              x={374.376}
              y={412.92}
              fill="#FFFFFF"
              width={111.272}
              height={4.744}
            />
            <rect
              x={374.376}
              y={394.32}
              fill="#FFFFFF"
              width={111.272}
              height={4.744}
            />
            <rect
              x={374.376}
              y={375.712}
              fill="#FFFFFF"
              width={111.272}
              height={4.744}
            />
          </g>
        </svg>
      ),
      title: "রেসপন্সিভ ডিজাইন",
      description: "সব ডিভাইসে পারফেক্ট",
    },
    {
      icon: (
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          width="64"
          height="64"
        >
          <rect y={109.852} width={512} height={358.496} />
          <path
            fill="#D6D6D6"
            d="M0,119.372V55.636c0-8.8,7.2-16,16-16h479.96c8.8,0,16,7.2,16,16v63.728H0V119.372z"
          />
          <polygon
            fill="#FFFFFF"
            points="471.624,101.508 171.536,101.508 200.24,57.508 471.624,57.508 "
          />
          <circle fill="#E50914" cx={53.904} cy={78.908} r={13.608} />
          <circle fill="#939393" cx={89.976} cy={78.908} r={13.608} />
          <circle fill="#C9C9C9" cx={126.056} cy={78.908} r={13.608} />
          <circle fill="#C9C9C9" cx={126.056} cy={78.908} r={13.608} />
          <path d="M215.624,71.244l1.912,8.312c0.416,1.952,0.832,3.944,1.168,5.936h0.08c0.376-1.992,0.976-4.024,1.504-5.896l2.368-8.352 h3.76l2.296,8.128c0.56,2.144,1.048,4.136,1.464,6.128h0.08c0.296-1.992,0.712-3.984,1.2-6.128l2.032-8.128h4.544l-5.752,18.312 h-4.288l-2.176-7.448c-0.56-1.912-0.976-3.648-1.392-5.864h-0.08c-0.376,2.256-0.856,4.064-1.392,5.864l-2.328,7.448h-4.328 l-5.416-18.312H215.624z" />
          <path d="M244.392,71.244l1.912,8.312c0.416,1.952,0.832,3.944,1.168,5.936h0.08c0.376-1.992,0.976-4.024,1.504-5.896l2.368-8.352 h3.76l2.296,8.128c0.56,2.144,1.048,4.136,1.464,6.128h0.08c0.296-1.992,0.712-3.984,1.2-6.128l2.032-8.128h4.544l-5.752,18.312 h-4.288l-2.176-7.448c-0.56-1.912-0.976-3.648-1.392-5.864h-0.08c-0.376,2.256-0.856,4.064-1.392,5.864l-2.328,7.448h-4.328 l-5.416-18.312H244.392z" />
          <path d="M273.16,71.244l1.912,8.312c0.416,1.952,0.832,3.944,1.168,5.936h0.08c0.376-1.992,0.976-4.024,1.504-5.896l2.368-8.352 h3.76l2.296,8.128c0.56,2.144,1.048,4.136,1.464,6.128h0.08c0.296-1.992,0.712-3.984,1.2-6.128l2.032-8.128h4.544l-5.752,18.312 h-4.296l-2.176-7.448c-0.56-1.912-0.976-3.648-1.392-5.864h-0.08c-0.376,2.256-0.856,4.064-1.392,5.864l-2.328,7.448h-4.328 l-5.416-18.312H273.16z" />
          <path d="M296.312,87.004c0-1.736,1.2-2.968,2.856-2.968c1.696,0,2.856,1.2,2.856,2.968c0,1.688-1.128,2.968-2.856,2.968 C297.488,89.972,296.312,88.692,296.312,87.004z" />
          <rect y={459.596} width={512} height={12.768} />
          <polygon
            fill="#E50914"
            points="501.744,459.588 435.928,459.588 407.336,459.588 336.608,459.588 318.688,445.964  193.312,445.964 175.392,459.588 104.664,459.588 76.072,459.588 10.256,459.588 0,459.588 0,472.356 512,472.356 512,459.588 "
          />
          <polygon points="440.352,92.508 437.496,89.708 447.384,79.548 436.904,69.324 439.696,66.468 453.04,79.468 " />
          <rect x={421.616} y={77.508} width={26.416} height={4} />
          <g>
            <rect
              x={115.616}
              y={322.076}
              fill="#FFFFFF"
              width={274.48}
              height={8}
            />
            <rect
              x={160.8}
              y={358.124}
              fill="#FFFFFF"
              width={180.648}
              height={8}
            />
            <path
              fill="#FFFFFF"
              d="M453.608,268.332H58.392v-79.24h395.216V268.332z"
            />
          </g>
          <path d="M390.32,249.604c-13.352,0-24.216-10.864-24.216-24.216c0-13.36,10.864-24.224,24.216-24.224s24.216,10.864,24.216,24.224 C414.536,238.74,403.672,249.604,390.32,249.604z M390.32,209.164c-8.944,0-16.216,7.28-16.216,16.224s7.272,16.216,16.216,16.216 s16.216-7.272,16.216-16.216S399.264,209.164,390.32,209.164z" />
          <rect
            x={406.536}
            y={235.739}
            transform="matrix(-0.7073 0.7069 -0.7069 -0.7073 874.5184 129.0807)"
            width={8}
            height={19.696}
          />
          <path d="M91.544,238.98c1.976,1.144,4.944,2.128,8.064,2.128c3.904,0,6.08-1.832,6.08-4.544c0-2.52-1.68-4.008-5.928-5.536 c-5.496-1.976-9-4.888-9-9.688c0-5.44,4.544-9.592,11.768-9.592c3.608,0,6.28,0.792,8.008,1.68l-1.488,4.896 c-1.176-0.64-3.504-1.584-6.616-1.584c-3.856,0-5.536,2.08-5.536,4.008c0,2.568,1.928,3.76,6.376,5.488 c5.784,2.176,8.6,5.096,8.6,9.888c0,5.336-4.056,9.984-12.656,9.984c-3.504,0-7.168-0.984-9-2.072L91.544,238.98z" />
          <path d="M121.68,235.268c0.152,4.352,3.56,6.232,7.416,6.232c2.824,0,4.848-0.4,6.68-1.088l0.888,4.192 c-2.08,0.84-4.944,1.488-8.408,1.488c-7.816,0-12.416-4.8-12.416-12.16c0-6.68,4.056-12.952,11.776-12.952 c7.808,0,10.376,6.424,10.376,11.712c0,1.144-0.096,2.032-0.192,2.568L121.68,235.268L121.68,235.268z M132.256,231.02 c0.056-2.224-0.936-5.88-4.992-5.88c-3.76,0-5.336,3.416-5.584,5.88H132.256z" />
          <path d="M156.416,245.604l-0.4-2.672h-0.152c-1.488,1.88-4.008,3.216-7.12,3.216c-4.84,0-7.568-3.512-7.568-7.168 c0-6.08,5.392-9.152,14.288-9.096v-0.4c0-1.576-0.64-4.2-4.888-4.2c-2.376,0-4.84,0.744-6.48,1.784l-1.184-3.952 c1.784-1.096,4.888-2.128,8.704-2.128c7.712,0,9.936,4.888,9.936,10.136v8.704c0,2.168,0.096,4.296,0.344,5.784L156.416,245.604 L156.416,245.604z M155.616,233.836c-4.296-0.104-8.4,0.832-8.4,4.496c0,2.376,1.528,3.464,3.464,3.464 c2.424,0,4.192-1.584,4.744-3.312c0.152-0.448,0.192-0.936,0.192-1.336L155.616,233.836z" />
          <path d="M167.952,229.292c0-3.264-0.056-5.584-0.2-7.768h5.288l0.2,4.6h0.192c1.184-3.416,4.008-5.144,6.576-5.144 c0.592,0,0.936,0.048,1.432,0.152v5.736c-0.496-0.104-1.04-0.2-1.784-0.2c-2.912,0-4.888,1.88-5.44,4.6 c-0.096,0.536-0.192,1.184-0.192,1.872v12.464h-6.08L167.952,229.292L167.952,229.292z" />
          <path d="M202.784,244.86c-1.28,0.592-3.808,1.232-6.824,1.232c-7.512,0-12.416-4.8-12.416-12.256c0-7.216,4.944-12.848,13.4-12.848 c2.224,0,4.496,0.496,5.88,1.136l-1.088,4.544c-0.984-0.448-2.424-0.936-4.592-0.936c-4.648,0-7.424,3.416-7.368,7.816 c0,4.944,3.208,7.76,7.368,7.76c2.128,0,3.608-0.448,4.8-0.936L202.784,244.86z" />
          <path d="M207.256,210.5h6.128v14.336h0.104c0.744-1.136,1.728-2.08,3.016-2.768c1.184-0.696,2.616-1.088,4.16-1.088 c4.104,0,8.4,2.72,8.4,10.432v14.184h-6.08v-13.504c0-3.504-1.288-6.128-4.648-6.128c-2.376,0-4.056,1.576-4.696,3.408 c-0.192,0.496-0.248,1.144-0.248,1.832v14.384h-6.128V210.5H207.256L207.256,210.5z" />
        </svg>
      ),
      title: "SEO অপটিমাইজড",
      description: "গুগলে ভালো র‍্যাংকিং",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          id="_x36_"
          width="64"
          height="64"
          version="1.1"
          viewBox="0 0 512 512"
        >
          <path
            fill="#646363"
            d="M468.125 128.73C304.284 99.474 234.069 0 234.069 0S163.847 99.474.013 128.73c0 64.367-5.858 277.944 234.056 383.27 239.907-105.325 234.056-318.902 234.056-383.27"
          ></path>
          <path
            fill="#EAEEBE"
            d="M234.069 466.88C63.977 384.073 43.61 240.378 41.255 161.786c95.349-23.792 158.067-69.25 192.814-101.558 34.747 32.308 97.458 77.766 192.807 101.558-2.348 78.592-22.721 222.287-192.807 305.094"
          ></path>
          <path
            fill="#F0C57B"
            d="M410.284 169.867c-1.813 70.95-19.134 203.716-176.215 279.583-29.05-14.015-53.306-29.989-73.582-47.191-27.411-23.173-47.513-48.568-62.293-74.285-33.346-58.164-39.32-118.025-40.346-158.106 88.156-21.531 145.384-63.78 176.221-92.92 15.328 14.483 37.185 32.21 66.118 49.035 26.16 15.183 58.132 29.637 96.284 40.256a371 371 0 0 0 13.813 3.628"
          ></path>
          <path
            fill="#716363"
            d="M234.069 76.947c-30.837 29.14-88.066 71.389-176.221 92.92.613 23.74 3.007 54.442 11.742 87.595h164.48V76.947z"
          ></path>
          <path
            fill="#F1891A"
            d="M396.472 166.238c-38.152-10.618-70.124-25.073-96.284-40.256-28.934-16.825-50.79-34.552-66.118-49.035v180.515h164.506c8.748-33.153 11.103-63.841 11.709-87.595a368 368 0 0 1-13.813-3.629M69.589 257.462c6.012 22.824 15.011 46.8 28.604 70.512 14.78 25.718 34.882 51.113 62.293 74.285 20.276 17.202 44.532 33.176 73.582 47.191V257.462z"
            opacity="0.26"
          ></path>
          <path
            fill="#716363"
            d="M234.069 449.449c104.49-50.468 147.133-126.108 164.506-191.988H234.069z"
          ></path>
          <path
            fill="#231815"
            d="M234.069 0s70.215 99.474 234.056 128.73c0 64.367 5.851 277.944-234.056 383.27z"
            opacity="0.08"
          ></path>
        </svg>
      ),
      title: "সিকিউরিটি",
      description: "SSL ও সিকিউরিটি ফিচার",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 68 68"
          className="w-16 h-16"
          role="img"
          aria-label="Database Update Icon"
        >
          <g>
            <path
              fill="#ffd80c"
              d="m57.133 14.517-10.121-.756c-.646-.04-.984-.764-.626-1.29l1.669-2.454 2.244-3.288 1.808-2.652a.836.836 0 0 1 1.44.11l4.4 9.138c.278.576-.179 1.231-.814 1.192z"
            />
            <path
              fill="#5cbeff"
              d="m21.634 55.568-1.669 2.444-2.245 3.287-1.808 2.652c-.357.536-1.152.467-1.44-.11l-4.41-9.137a.828.828 0 0 1 .814-1.182l10.122.745a.84.84 0 0 1 .636 1.301z"
            />
            <path
              fill="#5cbeff"
              d="M56.64 56.664c-6.05 6.05-14.1 9.38-22.67 9.38a31.78 31.78 0 0 1-16.38-4.54l-.23-.13 2.54-3.69.19.11c10.78 6.34 24.51 4.58 33.39-4.29 8.62-8.61 10.49-22.02 4.76-32.61a2.233 2.233 0 0 1 1.97-3.3c.78 0 1.55.41 1.95 1.15 6.68 12.29 4.52 27.88-5.52 37.92z"
            />
            <path
              fill="#ffd80c"
              d="m50.66 6.654-2.54 3.69-.19-.11c-10.79-6.36-24.54-4.59-33.42 4.3C5.864 23.18 4.027 36.635 9.82 47.216c.532.97.232 2.184-.693 2.793l-.191.126c-1.036.682-2.446.347-3.042-.74-6.745-12.304-4.6-27.957 5.456-38.03 10.43-10.42 26.5-12.41 39.08-4.84z"
            />
            <ellipse
              cx="33.998"
              cy="19.509"
              fill="#435e88"
              rx="14.735"
              ry="7.301"
            />
            <path
              fill="#e5e8ef"
              d="M48.737 19.506v9.665c0 4.031-6.603 7.3-14.737 7.3-8.141 0-14.737-3.269-14.737-7.3v-9.665c0 4.038 6.596 7.307 14.737 7.307 8.134 0 14.737-3.269 14.737-7.307z"
            />
            <path
              fill="#435e88"
              d="M48.737 26.996v2.175c0 4.031-6.603 7.3-14.737 7.3-8.141 0-14.737-3.269-14.737-7.3v-2.175c0 4.039 6.596 7.308 14.737 7.308 8.134 0 14.737-3.27 14.737-7.308z"
            />
            <path
              fill="#e5e8ef"
              d="M48.737 29.166v9.665c0 4.031-6.603 7.3-14.737 7.3-8.141 0-14.737-3.269-14.737-7.3v-9.665c0 4.038 6.596 7.307 14.737 7.307 8.134 0 14.737-3.269 14.737-7.307z"
            />
            <path
              fill="#e5e8ef"
              d="M48.737 38.826v9.665c0 4.031-6.603 7.3-14.737 7.3-8.141 0-14.737-3.269-14.737-7.3v-9.665c0 4.038 6.596 7.307 14.737 7.307 8.134 0 14.737-3.269 14.737-7.307z"
            />
            <circle cx="44.323" cy="29.166" r="1.881" fill="#c175ff" />
            <path
              fill="#b244f1"
              d="M46.205 29.169a1.88 1.88 0 0 1-1.882 1.874 1.86 1.86 0 0 1-1.263-.495l2.419-2.865c.446.346.726.883.726 1.486z"
            />
            <circle cx="38.705" cy="30.528" r="1.881" fill="#ffd80c" />
            <path
              fill="#ffbe00"
              d="M40.587 30.53a1.88 1.88 0 0 1-1.882 1.875 1.86 1.86 0 0 1-1.263-.495l2.419-2.865c.445.346.726.883.726 1.486z"
            />
            <circle cx="44.323" cy="39.046" r="1.881" fill="#c175ff" />
            <path
              fill="#b244f1"
              d="M46.205 39.05a1.88 1.88 0 0 1-1.882 1.874 1.86 1.86 0 0 1-1.263-.496l2.419-2.865c.446.347.726.884.726 1.486z"
            />
            <circle cx="38.705" cy="40.408" r="1.881" fill="#ffd80c" />
            <path
              fill="#ffbe00"
              d="M40.587 40.411a1.88 1.88 0 0 1-1.882 1.875 1.86 1.86 0 0 1-1.263-.496l2.419-2.865c.445.347.726.884.726 1.486z"
            />
            <circle cx="44.323" cy="48.286" r="1.881" fill="#c175ff" />
            <path
              fill="#b244f1"
              d="M46.205 48.29a1.88 1.88 0 0 1-1.882 1.873 1.86 1.86 0 0 1-1.263-.495l2.419-2.865c.446.347.726.884.726 1.486z"
            />
            <circle cx="38.705" cy="49.648" r="1.881" fill="#ffd80c" />
            <path
              fill="#ffbe00"
              d="M40.587 49.651a1.88 1.88 0 0 1-1.882 1.874 1.86 1.86 0 0 1-1.263-.495l2.419-2.865c.445.347.726.884.726 1.486z"
            />
            <path
              fill="#435e88"
              d="M48.737 36.656v2.175c0 4.031-6.603 7.3-14.737 7.3-8.141 0-14.737-3.269-14.737-7.3v-2.175c0 4.039 6.596 7.308 14.737 7.308 8.134 0 14.737-3.269 14.737-7.308z"
            />
          </g>
        </svg>
      ),
      title: "সহজ আপডেট",
      description: "CMS ইন্টিগ্রেশন",
    },
  ];

  const technologies = [
    { name: "React.js", icon: "⚛️", color: "bg-blue-50" },
    { name: "Node.js", icon: "🟢", color: "bg-green-50" },
    { name: "WordPress", icon: "📝", color: "bg-purple-50" },
    { name: "HTML5/CSS3", icon: "🎨", color: "bg-orange-50" },
    { name: "PHP", icon: "🐘", color: "bg-indigo-50" },
    { name: "MongoDB", icon: "🍃", color: "bg-teal-50" },
  ];

  const packages = [
    {
      name: "ল্যান্ডিং পেজ",
      price: "১৫,০০০",
      duration: "একবার",
      features: [
        "১ পেজ ডিজাইন",
        "রেসপন্সিভ লেআউট",
        "কন্টাক্ট ফর্ম",
        "বেসিক SEO",
        "২ মাস সাপোর্ট",
      ],
    },
    {
      name: "বিজনেস ওয়েবসাইট",
      price: "৩৫,০০০",
      duration: "একবার",
      popular: true,
      features: [
        "৫-৭ পেজ ডিজাইন",
        "কাস্টম ডিজাইন",
        "CMS ইন্টিগ্রেশন",
        "এডভান্স SEO",
        "ব্লগ সেকশন",
        "৬ মাস সাপোর্ট",
      ],
    },
    {
      name: "কর্পোরেট ওয়েবসাইট",
      price: "৭৫,০০০+",
      duration: "কাস্টম",
      features: [
        "আনলিমিটেড পেজ",
        "প্রিমিয়াম ডিজাইন",
        "কাস্টম ফিচার",
        "মাল্টি-ল্যাঙ্গুয়েজ",
        "API ইন্টিগ্রেশন",
        "১ বছর সাপোর্ট",
      ],
    },
  ];

  const portfolio = [
    {
      name: "রেস্টুরেন্ট ওয়েবসাইট",
      category: "খাদ্য ও পানীয়",
      image: "🍽️",
    },
    {
      name: "শিক্ষা প্রতিষ্ঠান",
      category: "শিক্ষা",
      image: "🎓",
    },
    {
      name: "রিয়েল এস্টেট",
      category: "সম্পত্তি",
      image: "🏢",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 240"
                width="240"
                height="240"
                role="img"
                aria-labelledby="webTitle webDesc"
                className="mx-auto"
              >
                <title id="webTitle">Web development icon</title>
                <desc id="webDesc">
                  A monitor with code brackets and a small gear — represents web
                  development and tooling.
                </desc>

                <defs>
                  <linearGradient id="g-main" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#4F46E5" />
                    <stop offset="1" stopColor="#06B6D4" />
                  </linearGradient>

                  <linearGradient id="g-accent" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#A78BFA" />
                    <stop offset="1" stopColor="#60A5FA" />
                  </linearGradient>

                  <filter
                    id="shadow"
                    x="-30%"
                    y="-30%"
                    width="160%"
                    height="160%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="8"
                      stdDeviation="18"
                      floodColor="#0f172a"
                      floodOpacity="0.09"
                    />
                  </filter>
                </defs>

                {/* Background panel */}
                <rect
                  x="16"
                  y="28"
                  width="208"
                  height="136"
                  rx="14"
                  fill="url(#g-main)"
                  filter="url(#shadow)"
                />

                {/* Inner screen */}
                <rect
                  x="30"
                  y="42"
                  width="180"
                  height="104"
                  rx="8"
                  fill="#071023"
                  opacity="0.96"
                />

                {/* Code brackets */}
                <path
                  d="M74 84 L60 98 L74 112"
                  fill="none"
                  stroke="#E6F0FF"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M112 80 L128 120"
                  fill="none"
                  stroke="#E6F0FF"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M156 84 L170 98 L156 112"
                  fill="none"
                  stroke="#E6F0FF"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Subtle code lines */}
                <rect
                  x="46"
                  y="132"
                  width="56"
                  height="6"
                  rx="3"
                  fill="#94A3B8"
                  opacity="0.9"
                />
                <rect
                  x="46"
                  y="146"
                  width="96"
                  height="6"
                  rx="3"
                  fill="#64748B"
                  opacity="0.9"
                />
                <rect
                  x="46"
                  y="160"
                  width="72"
                  height="6"
                  rx="3"
                  fill="#94A3B8"
                  opacity="0.9"
                />

                {/* Monitor base */}
                <rect
                  x="88"
                  y="176"
                  width="64"
                  height="10"
                  rx="5"
                  fill="#081226"
                  opacity="0.95"
                />
                <rect
                  x="72"
                  y="188"
                  width="96"
                  height="8"
                  rx="5"
                  fill="#081226"
                  opacity="0.6"
                />

                {/* Accent chip + gear */}
                <g transform="translate(174,44) scale(0.9)">
                  <rect
                    x="-14"
                    y="-14"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#g-accent)"
                    opacity="0.98"
                  />
                  <path
                    d="M0,-8 L2,-6 M6,-2 L8,0 M6,6 L4,8 M-2,8 L-4,6 M-8,2 L-6,0 M-8,-2 L-6,-4 M-4,-8 L-2,-6"
                    stroke="#071023"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="0" cy="0" r="4" fill="#071023" />
                </g>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              প্রফেশনাল ওয়েব ডেভেলপমেন্ট সার্ভিস
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              আপনার ব্যবসার জন্য আধুনিক, দ্রুত এবং SEO ফ্রেন্ডলি ওয়েবসাইট তৈরি
              করি। রেসপন্সিভ ডিজাইন এবং ইউজার ফ্রেন্ডলি ইন্টারফেস সহ।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
              >
                প্রজেক্ট শুরু করুন →
              </Link>
              <a
                href="#portfolio"
                className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition"
              >
                পোর্টফোলিও দেখুন
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের ওয়েব ডেভেলপমেন্ট সেবা
            </h2>
            <p className="text-lg text-gray-600">
              আপনার প্রয়োজন অনুযায়ী কাস্টমাইজড সলিউশন
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমরা যে টেকনোলজি ব্যবহার করি
            </h2>
            <p className="text-lg text-gray-600">
              আধুনিক এবং শক্তিশালী টেকনোলজি স্ট্যাক
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`${tech.color} p-6 rounded-xl shadow-md hover:shadow-lg transition text-center`}
              >
                <div className="text-4xl mb-3 flex justify-center items-center">
                  {tech.icon}
                </div>
                <div className="font-semibold text-gray-800">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              আমাদের সাম্প্রতিক কাজ
            </h2>
            <p className="text-lg text-gray-600">
              বিভিন্ন শিল্পে আমাদের সফলতার গল্প
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-48 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-600 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {project.name}
                  </h3>
                  <button className="text-purple-600 font-semibold hover:text-purple-700">
                    বিস্তারিত দেখুন →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              প্রাইসিং প্ল্যান
            </h2>
            <p className="text-lg text-gray-600">
              সাশ্রয়ী মূল্যে পেশাদার ওয়েবসাইট
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-purple-500 to-pink-600 text-white transform scale-105 shadow-2xl"
                    : "bg-white border-2 border-gray-200 shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                    প্রস্তাবিত
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    pkg.popular ? "text-white" : "text-gray-800"
                  }`}
                >
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">৳{pkg.price}</span>
                  <span
                    className={pkg.popular ? "text-gray-200" : "text-gray-600"}
                  >
                    /{pkg.duration}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span
                        className={
                          pkg.popular ? "text-yellow-300" : "text-green-500"
                        }
                      >
                        ✓
                      </span>
                      <span
                        className={
                          pkg.popular ? "text-gray-100" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-full font-bold transition ${
                    pkg.popular
                      ? "bg-white text-purple-600 hover:bg-gray-100"
                      : "bg-purple-500 text-white hover:bg-purple-600"
                  }`}
                >
                  অর্ডার করুন
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            আজই পান আপনার ড্রিম ওয়েবসাইট
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            ফ্রি কনসালটেশন এবং প্রজেক্ট প্ল্যানিং
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 inline-block transform hover:scale-105 transition"
          >
            ফ্রি কনসালটেশন বুক করুন →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
