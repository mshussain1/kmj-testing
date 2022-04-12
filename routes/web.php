<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Working Routes
Route::get('/', function () {
    return view('frontend.home');
})->name('home');

Route::get('/karbala', function () {
    return view('frontend.karbala');
})->name('karbala');

Route::get('/karbala-01', function () {
    return view('frontend.partials.karbala.blogs.karbala-01');
})->name('karbala-01');

Route::get('/karbala-02', function () {
    return view('frontend.partials.karbala.blogs.karbala-02');
})->name('karbala-02');

Route::get('/karbala-03', function () {
    return view('frontend.partials.karbala.blogs.karbala-03');
})->name('karbala-03');

Route::get('/karbala-04', function () {
    return view('frontend.partials.karbala.blogs.karbala-04');
})->name('karbala-04');

Route::get('/karbala-05', function () {
    return view('frontend.partials.karbala.blogs.karbala-05');
})->name('karbala-05');

Route::get('/karbala-06', function () {
    return view('frontend.partials.karbala.blogs.karbala-06');
})->name('karbala-06');

Route::get('/karbala-07', function () {
    return view('frontend.partials.karbala.blogs.karbala-07');
})->name('karbala-07');

Route::get('/karbala-08', function () {
    return view('frontend.partials.karbala.blogs.karbala-08');
})->name('karbala-08');

Route::get('/karbala-09', function () {
    return view('frontend.partials.karbala.blogs.karbala-09');
})->name('karbala-09');

Route::get('/aqaed', function () {
    return view('frontend.aqaed');
})->name('aqaed');



//Testing Routes
Route::get('/contact', function () {
    return view('frontend.contact');
})->name('contact');

Route::get('/about', function () {
    return view('frontend.about');
})->name('about');


Route::get('/blog', function () {
    return view('frontend.blog');
})->name('blog');

Route::get('/blog_detail', function () {
    return view('frontend.blog_detail');
})->name('blog_detail');

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => 'auth', 'namespace' => 'App\Http\Controllers\Backend'], function () {
    Route::get('dashboard', 'DashboardController@index')->name('dashboard');
    Route::get('homepage', 'HomePageController@index')->name('homepage');
    Route::get('contact-us', 'ContactUsController@index')->name('contactUs');
    Route::get('about-us', 'AboutUsController@index')->name('aboutUs');
    Route::group(['prefix' => 'laravel-filemanager', 'middleware' => 'auth'], function () {
        \UniSharp\LaravelFilemanager\Lfm::routes();
    });
    Route::resource('blog', 'BlogController');
});

require __DIR__ . '/auth.php';
