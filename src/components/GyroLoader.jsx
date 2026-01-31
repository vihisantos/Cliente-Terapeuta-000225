import React from 'react';

const GyroLoader = () => {
    return (
        <div className="gyro-wrapper">
            <style>
                {`
        .gyro-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          background: #F8FAFC; /* Brand Light Background */
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
        }

        .gyro-wrapper .gyro-spinner {
          border: 0 solid transparent;
          border-radius: 50%;
          width: 60px; /* Slightly larger */
          height: 60px;
          position: relative;
        }

        .gyro-wrapper .gyro-loader {
          width: inherit;
          height: inherit;
          position: absolute;
        }

        .gyro-wrapper .gyro-loader::before,
        .gyro-wrapper .gyro-loader::after {
          content: '';
          border: 3px solid #14b8a6; /* Brand Teal */
          border-radius: 50%;
          width: inherit;
          height: inherit;
          position: absolute;
          opacity: 1;
        }

        .gyro-wrapper .gyro-l1::before,
        .gyro-wrapper .gyro-l1::after {
          animation: gyro-clockwiseZ 2.5s infinite;
        }

        .gyro-wrapper .gyro-l2::after,
        .gyro-wrapper .gyro-l2::before {
          animation: gyro-anticlockwiseZ 2.5s infinite;
          border-color: #D97706; /* Brand Gold for contrast */
        }

        @keyframes gyro-clockwiseZ {
          0%, 100% {
            transform: rotateY(0);
          }
          50% {
            transform: rotateY(180deg) skew(-10deg, -5deg);
          }
        }

        @keyframes gyro-anticlockwiseZ {
          0%, 100% {
            transform: rotateX(0);
          }
          50% {
            transform: rotateX(-180deg) skew(10deg, 5deg);
          }
        }
        `}
            </style>
            <div className="gyro-spinner">
                <div className="gyro-loader gyro-l1" />
                <div className="gyro-loader gyro-l2" />
            </div>
        </div>
    );
}

export default GyroLoader;
