import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ServiceSection = ({ services }) => {
    return (
        <section className="py-12 sm:py-16 lg:py-24 px-3 sm:px-4 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50" id="services">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
                    <div className="inline-block bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg mb-4 sm:mb-6 lg:mb-10">
                        আমাদের সেবাসমূহ
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 px-4">
                        নিচ থেকে <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">সার্ভিস</span> সিলেক্ট করুন
                    </h2>
                    <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        আপনার ব্যবসার জন্য সম্পূর্ণ ডিজিটাল সমাধান - এক ছাদের নিচে সব সেবা
                    </p>
                </div>

                <div className="grid grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            to={service.path}
                            className="block"
                        >
                            <div className="group relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-2 sm:p-4 md:p-5 lg:p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:border-transparent hover:-translate-y-1 sm:hover:-translate-y-2 h-full min-h-[140px] sm:min-h-[160px] lg:min-h-[200px]">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                                        <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 ${service.iconBg} rounded-lg sm:rounded-xl lg:rounded-2xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                                            {React.cloneElement(service.icon, { className: 'w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-gray-700 group-hover:text-white transition-colors' })}
                                        </div>

                                        <h3 className="text-sm sm:text-sm md:text-base lg:text-xl font-bold text-gray-900 group-hover:text-white transition-colors leading-tight line-clamp-2">
                                            {service.title}
                                        </h3>

                                        <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600 group-hover:text-white/90 transition-colors leading-snug line-clamp-2 mt-2 sm:mt-3">
                                            {service.desc}
                                        </p>
                                    </div>



                                    <div className="flex items-center text-red-500 group-hover:text-white font-semibold pt-2 lg:pt-3 text-[10px] sm:text-xs lg:text-sm">
                                        বিস্তারিত
                                        <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection