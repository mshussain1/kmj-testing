@extends('layouts.front_end_layout')
@section('content')
    <section class="relative">
        <div class="absolute inset-0 h-128 pt-16 box-content -z-1">
            <img class="absolute inset-0 w-full h-full object-cover opacity-25" src="{{ asset('images/hero-about.png') }}"
                width="1440" height="577" alt="About" />
            <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
        </div>

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div class="pt-32 pb-12 md:pt-40 md:pb-20">
                <div class="text-center">
                    <div class="relative flex justify-center items-center">
                        <div class="relative inline-flex items-start" data-aos="fade-up">
                            <img class="opacity-50" src="{{ asset('images/hero-about-fg.jpg') }}" width="768"
                                height="432" alt="About hero" />
                            <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true">
                            </div>
                        </div>
                        <div class="absolute" data-aos="fade-down">
                            <h1 class="h1 lg:text-6xl font-red-hat-display">Make your own <span
                                    class="text-amber-500">way</span></h1>
                        </div>
                        <div class="absolute bottom-0 -mb-8 w-0.5 h-16 bg-gray-300 dark:bg-gray-700" aria-hidden="true">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    @include('frontend.partials.targets')
    @include('frontend.partials.keywords')
    @include('frontend.partials.about_points')
    @include('frontend.partials.testimonials')

@endsection
