
namespace AbidzarFrm.Rukuntangga {
    export namespace VMRegistrationsRole {
        export const SA = 'SA';
        export const RW = 'RW';
        export const RT = 'RT';
        export const WARGA = 'WARGA';
    }
    export namespace StatusCode {
        export const Draft = 0;
        export const Requested = 1;
        export const Verified = 2;
        export const Rejected = 3;
    }

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TbKtpDialog extends Serenity.EntityDialog<TbKtpRow, any> {
        protected getFormKey() { return TbKtpForm.formKey; }
        protected getIdProperty() { return TbKtpRow.idProperty; }
        protected getLocalTextPrefix() { return TbKtpRow.localTextPrefix; }
        protected getNameProperty() { return TbKtpRow.nameProperty; }
        protected getService() { return TbKtpService.baseUrl; }
        protected getDeletePermission() { return TbKtpRow.insertPermission; }
        protected form = new TbKtpForm(this.idPrefix);

        private map;
        private marker;
        private circle;

        public hasRole(role: string): boolean {
            return Authorization.userDefinition.Roles.indexOf(role) > -1;
        }

        constructor() {
            super();

            this.form.IdProvinsi.changeSelect2(e => {
                this.form.IdKota.value = "";
                this.form.IdKecamatan.value = "";
                this.form.IdKelurahan.value = "";

                this.form.IdKota.items = [];
                this.form.IdKecamatan.items = [];
                this.form.IdKelurahan.items = [];
                this.SetKota();
            });

            this.form.IdKota.changeSelect2(e => {
                this.form.IdKecamatan.value = "";
                this.form.IdKelurahan.value = "";

                this.form.IdKecamatan.items = [];
                this.form.IdKelurahan.items = [];
                this.SetKecamatan();
            });

            this.form.IdKecamatan.changeSelect2(e => {
                this.form.IdKelurahan.value = "";

                this.form.IdKelurahan.items = [];
                this.SetKelurahan();
            });

            this.form.IdProvinsiTinggal.changeSelect2(e => {
                this.form.IdKotaTinggal.value = "";
                this.form.IdKecamatanTinggal.value = "";
                this.form.IdKelurahanTinggal.value = "";

                this.form.IdKotaTinggal.items = [];
                this.form.IdKecamatanTinggal.items = [];
                this.form.IdKelurahanTinggal.items = [];
                this.SetKotaTinggal();
            });

            this.form.IdKotaTinggal.changeSelect2(e => {
                this.form.IdKecamatanTinggal.value = "";
                this.form.IdKelurahanTinggal.value = "";

                this.form.IdKecamatanTinggal.items = [];
                this.form.IdKelurahanTinggal.items = [];
                this.SetKecamatanTinggal();
            });

            this.form.IdKecamatanTinggal.changeSelect2(e => {
                this.form.IdKelurahanTinggal.value = "";

                this.form.IdKelurahanTinggal.items = [];
                this.SetKelurahanTinggal();
            });

            this.form.StatusPerkawinan.changeSelect2(e => {
                Serenity.EditorUtils.setRequired(this.form.TanggalPerkawinan, this.form.StatusPerkawinan.value == "K");
            })

            this.form.TinggalSesuaiKtp.changeSelect2(e => {
                let flag: boolean = false;
                if (this.form.TinggalSesuaiKtp.value == "0") {
                    flag = true;
                }
                this.IsSameAddressWithKtp(flag);
            })
        }

        protected onDialogOpen() {
            super.onDialogOpen();
            var frm = this;

            if (this.isNew()) {
                var latLng = new google.maps.LatLng(-6.1967177, 106.820063);
            } else {
                if (frm.form.Latitude.value != null && frm.form.Longitude.value != null) {
                    var latLng = new google.maps.LatLng(frm.form.Latitude.value, frm.form.Longitude.value);
                }
                else {
                    var latLng = new google.maps.LatLng(-6.1967177, 106.820063);
                }
            }

            this.map = new google.maps.Map(document.getElementById('Map'),
                {
                    center: latLng,
                    draggable: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: true,
                    zoom: 16
                });

            this.marker = new google.maps.Marker({
                position: latLng,
                animation: google.maps.Animation.DROP,
                clickable: true,
                draggable: true
            });

            this.marker.setMap(this.map);

            this.circle = new google.maps.Circle({ map: this.map, fillColor: '#AA0000', strokeWeight: 1 });
            this.circle.setVisible(false);

            this.circle.setRadius(0);

            //if (!isNaN(frm.form.Radius.value) && frm.form.Radius.value.toString() != "0") {
            //    //var circle = new google.maps.Circle({
            //    //map: map,
            //    //radius: frm.form.Radius.value,    //in metres
            //    //fillColor: '#AA0000'
            //    //});

            //    this.circle.setRadius(frm.form.Radius.value);
            //    this.circle.setVisible(true);

            //    this.circle.bindTo('center', this.marker, 'position');
            //} else {
            //    this.circle.setRadius(0);
            //    this.circle.setVisible(false);
            //}

            //onchange listener radius
            //var radius = this.element.find(".Radius");
            //radius.keyup(handler => {
            //    frm.circle.setRadius(frm.form.Radius.value);
            //    frm.circle.setVisible(true);

            //    frm.circle.bindTo('center', frm.marker, 'position');
            //});

            //onchange listener latitude
            //var latitude = this.element.find(".Latitude");
            //latitude.keyup(handler => {
            //    if (frm.form.Latitude.value != undefined && frm.form.Longitude.value != undefined) {
            //        var inputLatLong = new google.maps.LatLng(frm.form.Latitude.value, frm.form.Longitude.value);
            //        map.setCenter(inputLatLong);

            //        marker.setPosition(inputLatLong);
            //        marker.setMap(map);
            //    }
            //});

            //onchange listener longitude
            //var longitude = this.element.find(".Longitude");
            //longitude.keyup(handler => {
            //    if (frm.form.Latitude.value != undefined && frm.form.Longitude.value != undefined) {
            //        var inputLongLat = new google.maps.LatLng(frm.form.Latitude.value, frm.form.Longitude.value);
            //        map.setCenter(inputLongLat);

            //        marker.setPosition(inputLongLat);
            //        marker.setMap(map);
            //    }
            //});

            //radius.bind("keyup", handler => {
            //    circle.setRadius(frm.form.Radius.value);
            //    circle.setVisible(true);

            //    circle.bindTo('center', marker, 'position');
            //});

            this.map.addListener('click', function (event) {
                var lat = event.latLng.lat();
                var lng = event.latLng.lng();

                frm.marker.setPosition(event.latLng);
                frm.marker.setMap(frm.map);

                //frm.marker.addListener('dragend', function (event) {
                //    frm.updateLatLong(event.getPosition().lat, event.getPosition().lng);
                //});

                //map.setCenter(event.latLng);
                //alert(lat);
                //alert(lng);
                frm.UpdateLatLong(lat, lng);
            })

            //var marker2 = new google.maps.Marker({
            //    position: latLng,
            //    animation: google.maps.Animation.DROP,
            //    clickable: true,
            //    draggable: true
            //});

            //marker2.getPosition().lat();

            this.marker.addListener('dragend', function (event) {
                //alert(frm.marker.getPosition().lat());

                frm.UpdateLatLong(frm.marker.getPosition().lat(), frm.marker.getPosition().lng());
            });

            //google.maps.event.addListener(this.marker, 'dragend', function () {
            //    // updateMarkerStatus('Drag ended');
            //    //geocodePosition(waypointMarker.getPosition());
            //    //frm.marker.getPosition();
            //    frm.updateLatLong(frm.marker.getPosition().lat, frm.marker.getPosition().lng);
            //});

            //Search Location method 1
            //var input = <HTMLInputElement>document.getElementById('MapInput');
            ////alert(input.value);
            //var searchBox = new google.maps.places.SearchBox(input);
            //map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
            //google.maps.event.addListener(searchBox, 'places_changed', function () {
            //    searchBox.set('map', null);


            //    var places = searchBox.getPlaces();

            //    var bounds = new google.maps.LatLngBounds();
            //    var i, place;
            //    for (i = 0; place = places[i]; i++) {
            //        (function (place) {
            //            var markers = new google.maps.Marker({

            //                position: place.geometry.location
            //            });
            //            markers.bindTo('map', searchBox, 'map');
            //            google.maps.event.addListener(markers, 'map_changed', function () {
            //                if (!this.getMap()) {
            //                    this.unbindAll();
            //                }
            //            });
            //            bounds.extend(place.geometry.location);


            //        } (place));

            //    }
            //    map.fitBounds(bounds);
            //    searchBox.set('map', map);
            //    map.setZoom(Math.min(map.getZoom(), 12));
            //});
            //end method 1

            //Search Location method 2
            //// Create the search box and link it to the UI element.
            //var input = <HTMLInputElement>document.getElementById('MapInput');
            //var searchBox = new google.maps.places.SearchBox(input);
            //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            //input.disabled = true;

            //// Bias the SearchBox results towards current map's viewport.
            //map.addListener('bounds_changed', function () {
            //    searchBox.setBounds(map.getBounds());
            //});

            //var markers = [];
            //// Listen for the event fired when the user selects a prediction and retrieve
            //// more details for that place.
            //searchBox.addListener('places_changed', function () {
            //    var places = searchBox.getPlaces();

            //    if (places.length == 0) {
            //        return;
            //    }

            //    // Clear out the old markers.
            //    markers.forEach(function (marker) {
            //        marker.setMap(null);
            //    });
            //    markers = [];

            //    // For each place, get the icon, name and location.
            //    var bounds = new google.maps.LatLngBounds();
            //    places.forEach(function (place) {
            //        if (!place.geometry) {
            //            console.log("Returned place contains no geometry");
            //            return;
            //        }
            //        var icon = {
            //            url: place.icon,
            //            size: new google.maps.Size(71, 71),
            //            origin: new google.maps.Point(0, 0),
            //            anchor: new google.maps.Point(17, 34),
            //            scaledSize: new google.maps.Size(25, 25)
            //        };

            //        // Create a marker for each place.
            //        markers.push(new google.maps.Marker({
            //            map: map,
            //            icon: icon,
            //            title: place.name,
            //            position: place.geometry.location
            //        }));

            //        if (place.geometry.viewport) {
            //            // Only geocodes have viewport.
            //            bounds.union(place.geometry.viewport);
            //        } else {
            //            bounds.extend(place.geometry.location);
            //        }
            //    });
            //    map.fitBounds(bounds);
            //});
            //end Search Location method 2
        }


        updateInterface() {
            super.updateInterface();
            let flag: boolean = false;

            if (this.isNew()) {
                this.form.TinggalSesuaiKtp.value = "1";
                flag = false;
            }

            if (this.isEditMode()) {
                this.SetKota();
                this.SetKecamatan();
                this.SetKelurahan();

                this.SetKotaTinggal();
                this.SetKecamatanTinggal();
                this.SetKelurahanTinggal();

                if (this.entity.TinggalSesuaiKtp == 0) {
                    flag = true;
                }
            }

            this.IsSameAddressWithKtp(flag);
            Serenity.EditorUtils.setRequired(this.form.TanggalPerkawinan, this.form.StatusPerkawinan.value == "K");
            this.UpdateContent();
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();        
        }

        validateBeforeSave(): boolean {
            super.validateBeforeSave();

            if (!this.OnlyNumberRegex(this.form.Nik.value, 16)) {
                Q.alert("Nik harus 16 digit");
                return false;
            }
            if (!this.OnlyNumberRegex(this.form.Kk.value, 16)) {
                Q.alert("Kk harus 10 digit");
                return false;
            }

            return true;
        }

        private OnlyNumberRegex(str: string, digit: number): boolean {
            if (str != null && str != "" && str != "-") {
                var pattern = new RegExp("^\\d{" + digit + "}$");
                return pattern.test(str);
            } else {
                return true;
            }
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.push({
                icon: "fa-arrow-circle-right text-blue",
                hint: "Submit",
                title: "Submit",
                cssClass: "btn-submit-boq",
                onClick: () => {
                    //if (this.IsValidPartialPassthrough()) {
                    //    if (!this.ValidateBeforeSubmitPartialPassthrough()) {
                    //        Q.alert("Please input PR Log No or Passthrough PR Log No ")
                    //        return;
                    //    } else {
                    //        let msg: string = this.ValidateLenghtPartialPassthrough();
                    //        if (msg != "") {
                    //            Q.alert(msg)
                    //            return;
                    //        }
                    //    }
                    //}
                }

            });

            return buttons;
        }

        private SetKota() {
            let idProvinsi: number = parseInt(this.form.IdProvinsi.value);
            let items: AbidzarFrm.Rukuntangga.TbKotaRow[] = AbidzarFrm.Rukuntangga.TbKotaRow.getLookup().items.filter(x => x.IdProvinsi == idProvinsi);
            items.forEach((x, index) => {
                this.form.IdKota.addItem({ id: x.Id.toString(), source: x.NamaKota, text: x.NamaKota, disabled: false });
            });

            if (this.isEditMode()) {
                this.form.IdKota.value = this.entity.IdKota.toString();
            }
        }

        private SetKecamatan() {
            let idKota: number = parseInt(this.form.IdKota.value);
            let items: AbidzarFrm.Rukuntangga.TbKecamatanRow[] = AbidzarFrm.Rukuntangga.TbKecamatanRow.getLookup().items.filter(x => x.IdKota == idKota);
            items.forEach((x, index) => {
                this.form.IdKecamatan.addItem({ id: x.Id.toString(), source: x.NamaKecamatan, text: x.NamaKecamatan, disabled: false });
            });

            if (this.isEditMode()) {
                this.form.IdKecamatan.value = this.entity.IdKecamatan.toString();
            }
        }

        private SetKelurahan() {
            let idKecamatan: number = parseInt(this.form.IdKecamatan.value);
            let items: AbidzarFrm.Rukuntangga.TbKelurahanRow[] = AbidzarFrm.Rukuntangga.TbKelurahanRow.getLookup().items.filter(x => x.IdKecamatan == idKecamatan);
            items.forEach((x, index) => {
                this.form.IdKelurahan.addItem({ id: x.Id.toString(), source: x.NamaKelurahan, text: x.NamaKelurahan, disabled: false });
            });

            if (this.isEditMode()) {
                this.form.IdKelurahan.value = this.entity.IdKelurahan.toString();
            }
        }

        private SetKotaTinggal() {
            let idProvinsiTinggal: number = parseInt(this.form.IdProvinsiTinggal.value);
            let items: AbidzarFrm.Rukuntangga.TbKotaRow[] = AbidzarFrm.Rukuntangga.TbKotaRow.getLookup().items.filter(x => x.IdProvinsi == idProvinsiTinggal);
            items.forEach((x, index) => {
                this.form.IdKotaTinggal.addItem({ id: x.Id.toString(), source: x.NamaKota, text: x.NamaKota, disabled: false });
            });

            if (this.isEditMode()) {
                this.form.IdKotaTinggal.value = this.entity.IdKotaTinggal.toString();
            }
        }

        private SetKecamatanTinggal() {
            let idKotaTinggal: number = parseInt(this.form.IdKotaTinggal.value);
            let items: AbidzarFrm.Rukuntangga.TbKecamatanRow[] = AbidzarFrm.Rukuntangga.TbKecamatanRow.getLookup().items.filter(x => x.IdKota == idKotaTinggal);
            items.forEach((x, index) => {
                this.form.IdKecamatanTinggal.addItem({ id: x.Id.toString(), source: x.NamaKecamatan, text: x.NamaKecamatan, disabled: false });
            });

            if (this.isEditMode()) {
                this.form.IdKecamatanTinggal.value = this.entity.IdKecamatanTinggal.toString();
            }
        }

        private SetKelurahanTinggal() {
            let idKecamatanTinggal: number = parseInt(this.form.IdKecamatanTinggal.value);
            let items: AbidzarFrm.Rukuntangga.TbKelurahanRow[] = AbidzarFrm.Rukuntangga.TbKelurahanRow.getLookup().items.filter(x => x.IdKecamatan == idKecamatanTinggal);
            items.forEach((x, index) => {
                this.form.IdKelurahanTinggal.addItem({ id: x.Id.toString(), source: x.NamaKelurahan, text: x.NamaKelurahan, disabled: false });
            });

            if (this.isEditMode()) {
                this.form.IdKelurahanTinggal.value = this.entity.IdKelurahanTinggal.toString();
            }
        }

        private IsSameAddressWithKtp(flag: boolean) {
            Serenity.EditorUtils.setRequired(this.form.IdProvinsiTinggal, flag);
            this.element.find(".IdProvinsiTinggal").toggle(flag);

            Serenity.EditorUtils.setRequired(this.form.IdKotaTinggal, flag);
            this.element.find(".IdKotaTinggal").toggle(flag);

            Serenity.EditorUtils.setRequired(this.form.IdKecamatanTinggal, flag);
            this.element.find(".IdKecamatanTinggal").toggle(flag);

            Serenity.EditorUtils.setRequired(this.form.IdKelurahanTinggal, flag);
            this.element.find(".IdKelurahanTinggal").toggle(flag);

            Serenity.EditorUtils.setRequired(this.form.AlamatTinggal, flag);
            this.element.find(".AlamatTinggal").toggle(flag);

            Serenity.EditorUtils.setRequired(this.form.RtTinggal, flag);
            this.element.find(".RtTinggal").toggle(flag);

            Serenity.EditorUtils.setRequired(this.form.RwTinggal, flag);
            this.element.find(".RwTinggal").toggle(flag);
        }

        protected UpdateContent() {
            var x = $("<div id='Map' style='width: 1200px;height: 400px'></div>");
            var Root = this.element.find(".PhotoRumah").last();
            x.insertAfter(Root);
        }

        protected UpdateLatLong(lat: number, long: number) {
            this.form.Latitude.value = lat;
            this.form.Longitude.value = long;
        }

        get isDraft() {
            return this.entity.DataStatus == StatusCode.Draft;
        }
        get isRequest() {
            return this.entity.DataStatus == StatusCode.Requested;
        }
        get isVerified() {
            return this.entity.DataStatus == StatusCode.Verified;
        }
        get isRejected() {
            return this.entity.DataStatus == StatusCode.Requested;
        }
    }
}