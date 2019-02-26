@extends('layouts.app')

@section('content')
<div class="container">
    <section class="ftco-appointment">
        <div class="overlay"></div>
        <div class="container-wrap">
            <div class="row no-gutters d-md-flex align-items-center">
                <div class="col-md-12 d-flex align-self-stretch">
                    <div id="map" stores="{{ $storeMaps }}"></div>
                </div>
            </div>
        </div>
    </section>
</div>

@endsection
