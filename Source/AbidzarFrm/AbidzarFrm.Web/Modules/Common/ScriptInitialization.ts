/// <reference path="../Common/Helpers/LanguageList.ts" />
/// <reference path="../Common/UserPreference/UserPreferenceStorage.ts" />

namespace AbidzarFrm.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('AbidzarFrm');
    Q.Router.enabled = false;
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
    Serenity.DataGrid.defaultPersistanceStorage = new Common.UserPreferenceStorage();

    if ($.fn['colorbox']) {
        $.fn['colorbox'].settings.maxWidth = "95%";
        $.fn['colorbox'].settings.maxHeight = "95%";
    }

    window.onerror = Q.ErrorHandling.runtimeErrorHandler;
}   