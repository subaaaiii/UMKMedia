import React, { useRef } from 'react';
import html2canvas from 'html2canvas-pro';
import { jsPDF } from 'jspdf';
import { images } from "../src/constants";

const Certificate = ({ name, kelas }) => {
    const certificateRef = useRef();

    const handleDownload = () => {
        html2canvas(certificateRef.current, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [canvas.width, canvas.height],
            });
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save('certificate.pdf');
        });
    };

    return (
        <div className="flex flex-col items-center">
            <div
                ref={certificateRef}
                className="relative w-full mx-auto"
                style={{ height: '600px', width: '850px' }}
            >
                <img
                src={images.certificate} // Ganti dengan path gambar sertifikat Anda
                alt="Certificate Template"
                className="w-full h-full object-cover"
            />
                <div
                    className="absolute"
                    style={{
                        top: '45%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: 'black',
                        fontFamily: 'sans-serif'
                    }}
                >
                    {name}
                </div>
                <div
                    className="absolute"
                    style={{
                        top: '59.5%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: 'black',
                        fontFamily: 'sans-serif'
                    }}
                >
                    {kelas}
                </div>
            </div>
            <button
                onClick={handleDownload}
                className="mt-8 px-4 py-2 bg-blue-500 text-white rounded mb-8"
            >
                Download Certificate
            </button>
        </div>
    );
};

export default Certificate;