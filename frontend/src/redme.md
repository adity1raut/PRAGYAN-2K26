     {/* Top-left corner design */}
          <div className="absolute top-0 left-0 w-64 h-64 overflow-hidden">
            {/* Outer yellow border */}
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 256 256">
              {/* Glow effect */}
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                </linearGradient>
              </defs>

              {/* Main yellow frame */}
              <path d="M 0 0 L 240 0 L 200 30 L 180 30 L 170 40 L 50 40 L 40 50 L 30 50 L 0 80 Z"
                    fill="url(#yellowGrad)"
                    filter="url(#glow)" />

              {/* Inner dark frame */}
              <path d="M 10 10 L 230 10 L 192 36 L 174 36 L 166 44 L 54 44 L 46 52 L 36 52 L 10 78 Z"
                    fill="#1e293b" />

              {/* Accent lines */}
              <path d="M 20 20 L 220 20 L 184 42 L 168 42 L 162 48 L 58 48 L 52 54 L 42 54 L 20 76 Z"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="1"
                    opacity="0.5" />

              {/* Diagonal stripes top */}
              <g opacity="0.8" filter="url(#glow)">
                <rect x="120" y="5" width="8" height="3" fill="#fbbf24" transform="skewX(-45)" />
                <rect x="135" y="5" width="8" height="3" fill="#fbbf24" transform="skewX(-45)" />
                <rect x="150" y="5" width="8" height="3" fill="#fbbf24" transform="skewX(-45)" />
              </g>

              {/* Diagonal stripes right side of top */}
              <g opacity="0.8" filter="url(#glow)">
                <rect x="200" y="5" width="6" height="3" fill="#fbbf24" transform="skewX(-45)" />
                <rect x="210" y="5" width="6" height="3" fill="#fbbf24" transform="skewX(-45)" />
                <rect x="220" y="5" width="6" height="3" fill="#fbbf24" transform="skewX(-45)" />
                <rect x="230" y="5" width="6" height="3" fill="#fbbf24" transform="skewX(-45)" />
              </g>

              {/* Left side diagonal stripes */}
              <g opacity="0.8" filter="url(#glow)">
                <rect x="5" y="100" width="3" height="12" fill="#fbbf24" transform="skewY(-45)" />
                <rect x="5" y="130" width="3" height="12" fill="#fbbf24" transform="skewY(-45)" />
                <rect x="5" y="160" width="3" height="12" fill="#fbbf24" transform="skewY(-45)" />
                <rect x="5" y="190" width="3" height="12" fill="#fbbf24" transform="skewY(-45)" />
              </g>

              {/* Corner cutout detail */}
              <path d="M 35 25 L 55 25 L 55 35 L 35 35 Z"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="1.5"
                    opacity="0.6" />
              <circle cx="45" cy="30" r="2" fill="#fbbf24" opacity="0.8" />

              {/* Tech details */}
              <line x1="70" y1="28" x2="140" y2="28" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />
              <line x1="70" y1="32" x2="120" y2="32" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>






                {/* Bottom-right corner design - enhanced version */}
          <div className="absolute bottom-0 right-0 w-64 h-64 overflow-hidden">
            <svg className="absolute bottom-0 right-0 w-full h-full" viewBox="0 0 256 256">
              <defs>
                <filter id="glow3">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <linearGradient id="yellowGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                </linearGradient>
              </defs>

              {/* Main yellow frame - mirrored */}
              <path d="M 256 256 L 16 256 L 56 226 L 76 226 L 86 216 L 206 216 L 216 206 L 226 206 L 256 176 Z"
                    fill="url(#yellowGrad2)"
                    filter="url(#glow3)" />

              {/* Inner dark frame - mirrored */}
              <path d="M 246 246 L 26 246 L 64 220 L 82 220 L 90 212 L 202 212 L 210 204 L 220 204 L 246 178 Z"
                    fill="#1e293b" />

              {/* Accent lines - mirrored */}
              <path d="M 236 236 L 36 236 L 72 214 L 88 214 L 94 208 L 198 208 L 204 202 L 214 202 L 236 180 Z"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="1"
                    opacity="0.5" />

              {/* Diagonal stripes bottom */}
              <g opacity="0.8" filter="url(#glow3)">
                <rect x="128" y="248" width="8" height="3" fill="#fbbf24" transform="skewX(-45)" />
                <rect x="113" y="248" width="8" height="3" fill="#fbbf24" transform="skewX(-45)" />
                <rect x="98" y="248" width="8" height="3" fill="#fbbf24" transform="skewX(-45)" />
              </g>

              {/* Diagonal stripes left side of bottom */}
              <g opacity="0.8" filter="url(#glow3)">
                <rect x="48" y="248" width="6" height="3" fill="#fbbf24" transform="skewX(-45)" />
                <rect x="38" y="248" width="6" height="3" fill="#fbbf24" transform="skewX(-45)" />
                <rect x="28" y="248" width="6" height="3" fill="#fbbf24" transform="skewX(-45)" />
                <rect x="18" y="248" width="6" height="3" fill="#fbbf24" transform="skewX(-45)" />
              </g>

              {/* Right side diagonal stripes */}
              <g opacity="0.8" filter="url(#glow3)">
                <rect x="248" y="144" width="3" height="12" fill="#fbbf24" transform="skewY(-45)" />
                <rect x="248" y="114" width="3" height="12" fill="#fbbf24" transform="skewY(-45)" />
                <rect x="248" y="84" width="3" height="12" fill="#fbbf24" transform="skewY(-45)" />
                <rect x="248" y="54" width="3" height="12" fill="#fbbf24" transform="skewY(-45)" />
              </g>

              {/* Corner cutout detail - mirrored */}
              <path d="M 221 231 L 201 231 L 201 221 L 221 221 Z"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="1.5"
                    opacity="0.6" />
              <circle cx="211" cy="226" r="2" fill="#fbbf24" opacity="0.8" />

              {/* Tech details - mirrored */}
              <line x1="186" y1="228" x2="116" y2="228" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />
              <line x1="186" y1="224" x2="136" y2="224" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>
