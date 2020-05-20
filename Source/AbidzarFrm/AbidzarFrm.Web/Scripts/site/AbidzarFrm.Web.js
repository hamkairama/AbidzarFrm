var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Security:Language';
            LanguageRow.insertPermission = 'Security:Language';
            LanguageRow.readPermission = 'Security:Language';
            LanguageRow.updatePermission = 'Security:Language';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Security:RolePermission';
            RolePermissionRow.insertPermission = 'Security:RolePermission';
            RolePermissionRow.readPermission = 'Security:RolePermission';
            RolePermissionRow.updatePermission = 'Security:RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Security:Role';
            RoleRow.insertPermission = 'Security:Role';
            RoleRow.readPermission = 'Security:Role';
            RoleRow.updatePermission = 'Security:Role';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    var w4 = s.LookupEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0,
                        'Nik', w4
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Security:UserPermission';
            UserPermissionRow.insertPermission = 'Security:UserPermission';
            UserPermissionRow.readPermission = 'Security:UserPermission';
            UserPermissionRow.updatePermission = 'Security:UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Security:UserRoles';
            UserRoleRow.insertPermission = 'Security:UserRoles';
            UserRoleRow.readPermission = 'Security:UserRoles';
            UserRoleRow.updatePermission = 'Security:UserRoles';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Security:UserMember';
            UserRow.insertPermission = 'Security:UserMember';
            UserRow.readPermission = 'Security:UserMember';
            UserRow.updatePermission = 'Security:UserMember';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var BasicSamplesService;
        (function (BasicSamplesService) {
            BasicSamplesService.baseUrl = 'BasicSamples/BasicSamples';
            [
                'OrdersByShipper',
                'OrderBulkAction'
            ].forEach(function (x) {
                BasicSamplesService[x] = function (r, s, o) {
                    return Q.serviceRequest(BasicSamplesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BasicSamplesService = BasicSamples.BasicSamplesService || (BasicSamples.BasicSamplesService = {}));
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChangingLookupTextForm = /** @class */ (function (_super) {
            __extends(ChangingLookupTextForm, _super);
            function ChangingLookupTextForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangingLookupTextForm.init) {
                    ChangingLookupTextForm.init = true;
                    var s = Serenity;
                    var w0 = BasicSamples.ChangingLookupTextEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(ChangingLookupTextForm, [
                        'ProductID', w0,
                        'UnitPrice', w1,
                        'Quantity', w2,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            ChangingLookupTextForm.formKey = 'BasicSamples.ChangingLookupText';
            return ChangingLookupTextForm;
        }(Serenity.PrefixedContext));
        BasicSamples.ChangingLookupTextForm = ChangingLookupTextForm;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomerGrossSalesService;
        (function (CustomerGrossSalesService) {
            CustomerGrossSalesService.baseUrl = 'BasicSamples/CustomerGrossSales';
            [
                'List'
            ].forEach(function (x) {
                CustomerGrossSalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerGrossSalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerGrossSalesService = BasicSamples.CustomerGrossSalesService || (BasicSamples.CustomerGrossSalesService = {}));
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleForm = /** @class */ (function (_super) {
            __extends(DragDropSampleForm, _super);
            function DragDropSampleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DragDropSampleForm.init) {
                    DragDropSampleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DragDropSampleForm, [
                        'Title', w0
                    ]);
                }
                return _this;
            }
            DragDropSampleForm.formKey = 'BasicSamples.DragDropSample';
            return DragDropSampleForm;
        }(Serenity.PrefixedContext));
        BasicSamples.DragDropSampleForm = DragDropSampleForm;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleRow;
        (function (DragDropSampleRow) {
            DragDropSampleRow.idProperty = 'Id';
            DragDropSampleRow.nameProperty = 'Title';
            DragDropSampleRow.localTextPrefix = 'Northwind.DragDropSample';
            DragDropSampleRow.deletePermission = 'Northwind:General';
            DragDropSampleRow.insertPermission = 'Northwind:General';
            DragDropSampleRow.readPermission = 'Northwind:General';
            DragDropSampleRow.updatePermission = 'Northwind:General';
        })(DragDropSampleRow = BasicSamples.DragDropSampleRow || (BasicSamples.DragDropSampleRow = {}));
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleService;
        (function (DragDropSampleService) {
            DragDropSampleService.baseUrl = 'BasicSamples/DragDropSample';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DragDropSampleService[x] = function (r, s, o) {
                    return Q.serviceRequest(DragDropSampleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DragDropSampleService = BasicSamples.DragDropSampleService || (BasicSamples.DragDropSampleService = {}));
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var FilteredLookupInDetailForm = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailForm, _super);
            function FilteredLookupInDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FilteredLookupInDetailForm.init) {
                    FilteredLookupInDetailForm.init = true;
                    var s = Serenity;
                    var w0 = AbidzarFrm.Northwind.CustomerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = BasicSamples.FilteredLookupDetailEditor;
                    Q.initFormType(FilteredLookupInDetailForm, [
                        'CustomerID', w0,
                        'OrderDate', w1,
                        'CategoryID', w2,
                        'DetailList', w3
                    ]);
                }
                return _this;
            }
            FilteredLookupInDetailForm.formKey = 'BasicSamples.FilteredLookupInDetail';
            return FilteredLookupInDetailForm;
        }(Serenity.PrefixedContext));
        BasicSamples.FilteredLookupInDetailForm = FilteredLookupInDetailForm;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var HardcodedValuesForm = /** @class */ (function (_super) {
            __extends(HardcodedValuesForm, _super);
            function HardcodedValuesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!HardcodedValuesForm.init) {
                    HardcodedValuesForm.init = true;
                    var s = Serenity;
                    var w0 = BasicSamples.HardcodedValuesEditor;
                    Q.initFormType(HardcodedValuesForm, [
                        'SomeValue', w0
                    ]);
                }
                return _this;
            }
            HardcodedValuesForm.formKey = 'BasicSamples.HarcodedValues';
            return HardcodedValuesForm;
        }(Serenity.PrefixedContext));
        BasicSamples.HardcodedValuesForm = HardcodedValuesForm;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var LookupFilterByMultipleForm = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleForm, _super);
            function LookupFilterByMultipleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LookupFilterByMultipleForm.init) {
                    LookupFilterByMultipleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.LookupEditor;
                    var w4 = BasicSamples.ProduceSeafoodCategoryEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = s.IntegerEditor;
                    Q.initFormType(LookupFilterByMultipleForm, [
                        'ProductName', w0,
                        'ProductImage', w1,
                        'Discontinued', w2,
                        'SupplierID', w3,
                        'CategoryID', w4,
                        'QuantityPerUnit', w0,
                        'UnitPrice', w5,
                        'UnitsInStock', w6,
                        'UnitsOnOrder', w6,
                        'ReorderLevel', w6
                    ]);
                }
                return _this;
            }
            LookupFilterByMultipleForm.formKey = 'BasicSamples.LookupFilterByMultiple';
            return LookupFilterByMultipleForm;
        }(Serenity.PrefixedContext));
        BasicSamples.LookupFilterByMultipleForm = LookupFilterByMultipleForm;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataForm = /** @class */ (function (_super) {
            __extends(PopulateLinkedDataForm, _super);
            function PopulateLinkedDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PopulateLinkedDataForm.init) {
                    PopulateLinkedDataForm.init = true;
                    var s = Serenity;
                    var w0 = AbidzarFrm.Northwind.CustomerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.LookupEditor;
                    var w4 = AbidzarFrm.Northwind.OrderDetailsEditor;
                    Q.initFormType(PopulateLinkedDataForm, [
                        'CustomerID', w0,
                        'CustomerContactName', w1,
                        'CustomerContactTitle', w1,
                        'CustomerCity', w1,
                        'CustomerRegion', w1,
                        'CustomerCountry', w1,
                        'CustomerPhone', w1,
                        'CustomerFax', w1,
                        'OrderDate', w2,
                        'RequiredDate', w2,
                        'EmployeeID', w3,
                        'DetailList', w4
                    ]);
                }
                return _this;
            }
            PopulateLinkedDataForm.formKey = 'BasicSamples.PopulateLinkedData';
            return PopulateLinkedDataForm;
        }(Serenity.PrefixedContext));
        BasicSamples.PopulateLinkedDataForm = PopulateLinkedDataForm;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportForm = /** @class */ (function (_super) {
            __extends(ProductExcelImportForm, _super);
            function ProductExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductExcelImportForm.init) {
                    ProductExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(ProductExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            ProductExcelImportForm.formKey = 'BasicSamples.ProductExcelImport';
            return ProductExcelImportForm;
        }(Serenity.PrefixedContext));
        BasicSamples.ProductExcelImportForm = ProductExcelImportForm;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportService;
        (function (ProductExcelImportService) {
            ProductExcelImportService.baseUrl = 'BasicSamples/ProductExcelImport';
            [
                'ExcelImport'
            ].forEach(function (x) {
                ProductExcelImportService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductExcelImportService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductExcelImportService = BasicSamples.ProductExcelImportService || (BasicSamples.ProductExcelImportService = {}));
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var StaticTextBlockForm = /** @class */ (function (_super) {
            __extends(StaticTextBlockForm, _super);
            function StaticTextBlockForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StaticTextBlockForm.init) {
                    StaticTextBlockForm.init = true;
                    var s = Serenity;
                    var w0 = AbidzarFrm.StaticTextBlock;
                    var w1 = s.StringEditor;
                    Q.initFormType(StaticTextBlockForm, [
                        'StaticText', w0,
                        'SomeInput', w1,
                        'HtmlList', w0,
                        'FromLocalText', w0,
                        'DisplayFieldValue', w0
                    ]);
                }
                return _this;
            }
            StaticTextBlockForm.formKey = 'BasicSamples.StaticTextBlock';
            return StaticTextBlockForm;
        }(Serenity.PrefixedContext));
        BasicSamples.StaticTextBlockForm = StaticTextBlockForm;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var VSGalleryQAService;
        (function (VSGalleryQAService) {
            VSGalleryQAService.baseUrl = 'BasicSamples/VSGalleryQA';
            [
                'List'
            ].forEach(function (x) {
                VSGalleryQAService[x] = function (r, s, o) {
                    return Q.serviceRequest(VSGalleryQAService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VSGalleryQAService = BasicSamples.VSGalleryQAService || (BasicSamples.VSGalleryQAService = {}));
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = AbidzarFrm.Membership || (AbidzarFrm.Membership = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = AbidzarFrm.Membership || (AbidzarFrm.Membership = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = AbidzarFrm.Membership || (AbidzarFrm.Membership = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = AbidzarFrm.Membership || (AbidzarFrm.Membership = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = AbidzarFrm.Membership || (AbidzarFrm.Membership = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CategoryForm = /** @class */ (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryForm.init) {
                    CategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CategoryForm, [
                        'CategoryName', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            CategoryForm.formKey = 'Northwind.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Northwind.CategoryForm = CategoryForm;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'Id';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'Northwind.CategoryLang';
            CategoryLangRow.deletePermission = 'Northwind:General';
            CategoryLangRow.insertPermission = 'Northwind:General';
            CategoryLangRow.readPermission = 'Northwind:General';
            CategoryLangRow.updatePermission = 'Northwind:General';
        })(CategoryLangRow = Northwind.CategoryLangRow || (Northwind.CategoryLangRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangService;
        (function (CategoryLangService) {
            CategoryLangService.baseUrl = 'Northwind/CategoryLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryLangService = Northwind.CategoryLangService || (Northwind.CategoryLangService = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryID';
            CategoryRow.nameProperty = 'CategoryName';
            CategoryRow.localTextPrefix = 'Northwind.Category';
            CategoryRow.lookupKey = 'Northwind.Category';
            function getLookup() {
                return Q.getLookup('Northwind.Category');
            }
            CategoryRow.getLookup = getLookup;
            CategoryRow.deletePermission = 'Northwind:General';
            CategoryRow.insertPermission = 'Northwind:General';
            CategoryRow.readPermission = 'Northwind:General';
            CategoryRow.updatePermission = 'Northwind:General';
        })(CategoryRow = Northwind.CategoryRow || (Northwind.CategoryRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Northwind/Category';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryService = Northwind.CategoryService || (Northwind.CategoryService = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CustomerCustomerDemoRow;
        (function (CustomerCustomerDemoRow) {
            CustomerCustomerDemoRow.idProperty = 'ID';
            CustomerCustomerDemoRow.nameProperty = 'CustomerID';
            CustomerCustomerDemoRow.localTextPrefix = 'Northwind.CustomerCustomerDemo';
            CustomerCustomerDemoRow.deletePermission = 'Northwind:General';
            CustomerCustomerDemoRow.insertPermission = 'Northwind:General';
            CustomerCustomerDemoRow.readPermission = 'Northwind:General';
            CustomerCustomerDemoRow.updatePermission = 'Northwind:General';
        })(CustomerCustomerDemoRow = Northwind.CustomerCustomerDemoRow || (Northwind.CustomerCustomerDemoRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CustomerDemographicRow;
        (function (CustomerDemographicRow) {
            CustomerDemographicRow.idProperty = 'ID';
            CustomerDemographicRow.nameProperty = 'CustomerTypeID';
            CustomerDemographicRow.localTextPrefix = 'Northwind.CustomerDemographic';
            CustomerDemographicRow.deletePermission = 'Northwind:General';
            CustomerDemographicRow.insertPermission = 'Northwind:General';
            CustomerDemographicRow.readPermission = 'Northwind:General';
            CustomerDemographicRow.updatePermission = 'Northwind:General';
        })(CustomerDemographicRow = Northwind.CustomerDemographicRow || (Northwind.CustomerDemographicRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CustomerDetailsRow;
        (function (CustomerDetailsRow) {
            CustomerDetailsRow.idProperty = 'Id';
            CustomerDetailsRow.nameProperty = 'Email';
            CustomerDetailsRow.localTextPrefix = 'Northwind.CustomerDetails';
            CustomerDetailsRow.deletePermission = 'Northwind:General';
            CustomerDetailsRow.insertPermission = 'Northwind:General';
            CustomerDetailsRow.readPermission = 'Northwind:General';
            CustomerDetailsRow.updatePermission = 'Northwind:General';
        })(CustomerDetailsRow = Northwind.CustomerDetailsRow || (Northwind.CustomerDetailsRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = Northwind.NotesEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.EmailEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(CustomerForm, [
                        'CustomerID', w0,
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Representatives', w1,
                        'Address', w0,
                        'Country', w1,
                        'City', w1,
                        'Region', w0,
                        'PostalCode', w0,
                        'Phone', w0,
                        'Fax', w0,
                        'NoteList', w2,
                        'LastContactDate', w3,
                        'LastContactedBy', w1,
                        'Email', w4,
                        'SendBulletin', w5
                    ]);
                }
                return _this;
            }
            CustomerForm.formKey = 'Northwind.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Northwind.CustomerForm = CustomerForm;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrossSalesRow;
        (function (CustomerGrossSalesRow) {
            CustomerGrossSalesRow.nameProperty = 'ContactName';
            CustomerGrossSalesRow.localTextPrefix = 'Northwind.CustomerGrossSales';
            CustomerGrossSalesRow.deletePermission = 'Northwind:General';
            CustomerGrossSalesRow.insertPermission = 'Northwind:General';
            CustomerGrossSalesRow.readPermission = 'Northwind:General';
            CustomerGrossSalesRow.updatePermission = 'Northwind:General';
        })(CustomerGrossSalesRow = Northwind.CustomerGrossSalesRow || (Northwind.CustomerGrossSalesRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.idProperty = 'RepresentativeId';
            CustomerRepresentativesRow.localTextPrefix = 'Northwind.CustomerRepresentatives';
            CustomerRepresentativesRow.deletePermission = 'Northwind:Customer:View';
            CustomerRepresentativesRow.insertPermission = 'Northwind:Customer:View';
            CustomerRepresentativesRow.readPermission = 'Northwind:Customer:View';
            CustomerRepresentativesRow.updatePermission = 'Northwind:Customer:View';
        })(CustomerRepresentativesRow = Northwind.CustomerRepresentativesRow || (Northwind.CustomerRepresentativesRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'ID';
            CustomerRow.nameProperty = 'CompanyName';
            CustomerRow.localTextPrefix = 'Northwind.Customer';
            CustomerRow.lookupKey = 'Northwind.Customer';
            function getLookup() {
                return Q.getLookup('Northwind.Customer');
            }
            CustomerRow.getLookup = getLookup;
            CustomerRow.deletePermission = 'Northwind:Customer:Delete';
            CustomerRow.insertPermission = 'Northwind:Customer:Modify';
            CustomerRow.readPermission = 'Northwind:Customer:View';
            CustomerRow.updatePermission = 'Northwind:Customer:Modify';
        })(CustomerRow = Northwind.CustomerRow || (Northwind.CustomerRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Northwind/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'GetNextNumber',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Northwind.CustomerService || (Northwind.CustomerService = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'Northwind.Employee';
            EmployeeRow.lookupKey = 'Northwind.Employee';
            function getLookup() {
                return Q.getLookup('Northwind.Employee');
            }
            EmployeeRow.getLookup = getLookup;
            EmployeeRow.deletePermission = 'Northwind:General';
            EmployeeRow.insertPermission = 'Northwind:General';
            EmployeeRow.readPermission = 'Northwind:General';
            EmployeeRow.updatePermission = 'Northwind:General';
        })(EmployeeRow = Northwind.EmployeeRow || (Northwind.EmployeeRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var EmployeeTerritoryRow;
        (function (EmployeeTerritoryRow) {
            EmployeeTerritoryRow.idProperty = 'EmployeeID';
            EmployeeTerritoryRow.nameProperty = 'TerritoryID';
            EmployeeTerritoryRow.localTextPrefix = 'Northwind.EmployeeTerritory';
            EmployeeTerritoryRow.deletePermission = 'Northwind:General';
            EmployeeTerritoryRow.insertPermission = 'Northwind:General';
            EmployeeTerritoryRow.readPermission = 'Northwind:General';
            EmployeeTerritoryRow.updatePermission = 'Northwind:General';
        })(EmployeeTerritoryRow = Northwind.EmployeeTerritoryRow || (Northwind.EmployeeTerritoryRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = Northwind.Gender || (Northwind.Gender = {}));
        Serenity.Decorators.registerEnumType(Gender, 'AbidzarFrm.Northwind.Gender', 'AbidzarFrm.Northwind.Entities.Gender');
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Northwind.Note';
            NoteRow.deletePermission = 'Northwind:General';
            NoteRow.insertPermission = 'Northwind:General';
            NoteRow.readPermission = 'Northwind:General';
            NoteRow.updatePermission = 'Northwind:General';
        })(NoteRow = Northwind.NoteRow || (Northwind.NoteRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailForm = /** @class */ (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderDetailForm.init) {
                    OrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(OrderDetailForm, [
                        'ProductID', w0,
                        'UnitPrice', w1,
                        'Quantity', w2,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            OrderDetailForm.formKey = 'Northwind.OrderDetail';
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderDetailForm = OrderDetailForm;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'DetailID';
            OrderDetailRow.localTextPrefix = 'Northwind.OrderDetail';
            OrderDetailRow.deletePermission = 'Northwind:General';
            OrderDetailRow.insertPermission = 'Northwind:General';
            OrderDetailRow.readPermission = 'Northwind:General';
            OrderDetailRow.updatePermission = 'Northwind:General';
        })(OrderDetailRow = Northwind.OrderDetailRow || (Northwind.OrderDetailRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Northwind/OrderDetail';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderDetailService = Northwind.OrderDetailService || (Northwind.OrderDetailService = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var OrderForm = /** @class */ (function (_super) {
            __extends(OrderForm, _super);
            function OrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderForm.init) {
                    OrderForm.init = true;
                    var s = Serenity;
                    var w0 = Northwind.CustomerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = Northwind.OrderDetailsEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.StringEditor;
                    Q.initFormType(OrderForm, [
                        'CustomerID', w0,
                        'OrderDate', w1,
                        'RequiredDate', w1,
                        'EmployeeID', w2,
                        'DetailList', w3,
                        'ShippedDate', w1,
                        'ShipVia', w2,
                        'Freight', w4,
                        'ShipName', w5,
                        'ShipAddress', w5,
                        'ShipCity', w5,
                        'ShipRegion', w5,
                        'ShipPostalCode', w5,
                        'ShipCountry', w5
                    ]);
                }
                return _this;
            }
            OrderForm.formKey = 'Northwind.Order';
            return OrderForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderForm = OrderForm;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.idProperty = 'OrderID';
            OrderRow.nameProperty = 'CustomerID';
            OrderRow.localTextPrefix = 'Northwind.Order';
            OrderRow.deletePermission = 'Northwind:General';
            OrderRow.insertPermission = 'Northwind:General';
            OrderRow.readPermission = 'Northwind:General';
            OrderRow.updatePermission = 'Northwind:General';
        })(OrderRow = Northwind.OrderRow || (Northwind.OrderRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var OrderService;
        (function (OrderService) {
            OrderService.baseUrl = 'Northwind/Order';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderService = Northwind.OrderService || (Northwind.OrderService = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var OrderShippingState;
        (function (OrderShippingState) {
            OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
            OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
        })(OrderShippingState = Northwind.OrderShippingState || (Northwind.OrderShippingState = {}));
        Serenity.Decorators.registerEnumType(OrderShippingState, 'AbidzarFrm.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ProductForm = /** @class */ (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductForm.init) {
                    ProductForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.IntegerEditor;
                    Q.initFormType(ProductForm, [
                        'ProductName', w0,
                        'ProductImage', w1,
                        'Discontinued', w2,
                        'SupplierID', w3,
                        'CategoryID', w3,
                        'QuantityPerUnit', w0,
                        'UnitPrice', w4,
                        'UnitsInStock', w5,
                        'UnitsOnOrder', w5,
                        'ReorderLevel', w5
                    ]);
                }
                return _this;
            }
            ProductForm.formKey = 'Northwind.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Northwind.ProductForm = ProductForm;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'Id';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'Northwind.ProductLang';
            ProductLangRow.deletePermission = 'Northwind:General';
            ProductLangRow.insertPermission = 'Northwind:General';
            ProductLangRow.readPermission = 'Northwind:General';
            ProductLangRow.updatePermission = 'Northwind:General';
        })(ProductLangRow = Northwind.ProductLangRow || (Northwind.ProductLangRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ProductLangService;
        (function (ProductLangService) {
            ProductLangService.baseUrl = 'Northwind/ProductLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductLangService = Northwind.ProductLangService || (Northwind.ProductLangService = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ProductLogRow;
        (function (ProductLogRow) {
            ProductLogRow.idProperty = 'ProductLogID';
            ProductLogRow.localTextPrefix = 'Northwind.ProductLog';
            ProductLogRow.deletePermission = null;
            ProductLogRow.insertPermission = null;
            ProductLogRow.readPermission = '';
            ProductLogRow.updatePermission = null;
        })(ProductLogRow = Northwind.ProductLogRow || (Northwind.ProductLogRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductID';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'Northwind.Product';
            ProductRow.lookupKey = 'Northwind.Product';
            function getLookup() {
                return Q.getLookup('Northwind.Product');
            }
            ProductRow.getLookup = getLookup;
            ProductRow.deletePermission = 'Northwind:General';
            ProductRow.insertPermission = 'Northwind:General';
            ProductRow.readPermission = 'Northwind:General';
            ProductRow.updatePermission = 'Northwind:General';
        })(ProductRow = Northwind.ProductRow || (Northwind.ProductRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Northwind/Product';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductService = Northwind.ProductService || (Northwind.ProductService = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var RegionForm = /** @class */ (function (_super) {
            __extends(RegionForm, _super);
            function RegionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RegionForm.init) {
                    RegionForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(RegionForm, [
                        'RegionID', w0,
                        'RegionDescription', w1
                    ]);
                }
                return _this;
            }
            RegionForm.formKey = 'Northwind.Region';
            return RegionForm;
        }(Serenity.PrefixedContext));
        Northwind.RegionForm = RegionForm;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var RegionRow;
        (function (RegionRow) {
            RegionRow.idProperty = 'RegionID';
            RegionRow.nameProperty = 'RegionDescription';
            RegionRow.localTextPrefix = 'Northwind.Region';
            RegionRow.lookupKey = 'Northwind.Region';
            function getLookup() {
                return Q.getLookup('Northwind.Region');
            }
            RegionRow.getLookup = getLookup;
            RegionRow.deletePermission = 'Northwind:General';
            RegionRow.insertPermission = 'Northwind:General';
            RegionRow.readPermission = 'Northwind:General';
            RegionRow.updatePermission = 'Northwind:General';
        })(RegionRow = Northwind.RegionRow || (Northwind.RegionRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var RegionService;
        (function (RegionService) {
            RegionService.baseUrl = 'Northwind/Region';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RegionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RegionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RegionService = Northwind.RegionService || (Northwind.RegionService = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryRow;
        (function (SalesByCategoryRow) {
            SalesByCategoryRow.nameProperty = 'CategoryName';
            SalesByCategoryRow.localTextPrefix = 'Northwind.SalesByCategory';
            SalesByCategoryRow.deletePermission = 'Northwind:General';
            SalesByCategoryRow.insertPermission = 'Northwind:General';
            SalesByCategoryRow.readPermission = 'Northwind:General';
            SalesByCategoryRow.updatePermission = 'Northwind:General';
        })(SalesByCategoryRow = Northwind.SalesByCategoryRow || (Northwind.SalesByCategoryRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryService;
        (function (SalesByCategoryService) {
            SalesByCategoryService.baseUrl = 'Northwind/SalesByCategory';
            [
                'List'
            ].forEach(function (x) {
                SalesByCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesByCategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesByCategoryService = Northwind.SalesByCategoryService || (Northwind.SalesByCategoryService = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ShipperForm = /** @class */ (function (_super) {
            __extends(ShipperForm, _super);
            function ShipperForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ShipperForm.init) {
                    ShipperForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Northwind.PhoneEditor;
                    Q.initFormType(ShipperForm, [
                        'CompanyName', w0,
                        'Phone', w1
                    ]);
                }
                return _this;
            }
            ShipperForm.formKey = 'Northwind.Shipper';
            return ShipperForm;
        }(Serenity.PrefixedContext));
        Northwind.ShipperForm = ShipperForm;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ShipperRow;
        (function (ShipperRow) {
            ShipperRow.idProperty = 'ShipperID';
            ShipperRow.nameProperty = 'CompanyName';
            ShipperRow.localTextPrefix = 'Northwind.Shipper';
            ShipperRow.lookupKey = 'Northwind.Shipper';
            function getLookup() {
                return Q.getLookup('Northwind.Shipper');
            }
            ShipperRow.getLookup = getLookup;
            ShipperRow.deletePermission = 'Northwind:General';
            ShipperRow.insertPermission = 'Northwind:General';
            ShipperRow.readPermission = 'Northwind:General';
            ShipperRow.updatePermission = 'Northwind:General';
        })(ShipperRow = Northwind.ShipperRow || (Northwind.ShipperRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ShipperService;
        (function (ShipperService) {
            ShipperService.baseUrl = 'Northwind/Shipper';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ShipperService[x] = function (r, s, o) {
                    return Q.serviceRequest(ShipperService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ShipperService = Northwind.ShipperService || (Northwind.ShipperService = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var SupplierForm = /** @class */ (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierForm.init) {
                    SupplierForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SupplierForm, [
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Address', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'City', w0,
                        'Phone', w0,
                        'Fax', w0,
                        'HomePage', w0
                    ]);
                }
                return _this;
            }
            SupplierForm.formKey = 'Northwind.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Northwind.SupplierForm = SupplierForm;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierID';
            SupplierRow.nameProperty = 'CompanyName';
            SupplierRow.localTextPrefix = 'Northwind.Supplier';
            SupplierRow.lookupKey = 'Northwind.Supplier';
            function getLookup() {
                return Q.getLookup('Northwind.Supplier');
            }
            SupplierRow.getLookup = getLookup;
            SupplierRow.deletePermission = 'Northwind:General';
            SupplierRow.insertPermission = 'Northwind:General';
            SupplierRow.readPermission = 'Northwind:General';
            SupplierRow.updatePermission = 'Northwind:General';
        })(SupplierRow = Northwind.SupplierRow || (Northwind.SupplierRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Northwind/Supplier';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SupplierService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierService = Northwind.SupplierService || (Northwind.SupplierService = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var TerritoryForm = /** @class */ (function (_super) {
            __extends(TerritoryForm, _super);
            function TerritoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TerritoryForm.init) {
                    TerritoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(TerritoryForm, [
                        'TerritoryID', w0,
                        'TerritoryDescription', w0,
                        'RegionID', w1
                    ]);
                }
                return _this;
            }
            TerritoryForm.formKey = 'Northwind.Territory';
            return TerritoryForm;
        }(Serenity.PrefixedContext));
        Northwind.TerritoryForm = TerritoryForm;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var TerritoryRow;
        (function (TerritoryRow) {
            TerritoryRow.idProperty = 'ID';
            TerritoryRow.nameProperty = 'TerritoryID';
            TerritoryRow.localTextPrefix = 'Northwind.Territory';
            TerritoryRow.lookupKey = 'Northwind.Territory';
            function getLookup() {
                return Q.getLookup('Northwind.Territory');
            }
            TerritoryRow.getLookup = getLookup;
            TerritoryRow.deletePermission = 'Northwind:General';
            TerritoryRow.insertPermission = 'Northwind:General';
            TerritoryRow.readPermission = 'Northwind:General';
            TerritoryRow.updatePermission = 'Northwind:General';
        })(TerritoryRow = Northwind.TerritoryRow || (Northwind.TerritoryRow = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var TerritoryService;
        (function (TerritoryService) {
            TerritoryService.baseUrl = 'Northwind/Territory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TerritoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(TerritoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TerritoryService = Northwind.TerritoryService || (Northwind.TerritoryService = {}));
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var AppointmentDiaryForm = /** @class */ (function (_super) {
            __extends(AppointmentDiaryForm, _super);
            function AppointmentDiaryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AppointmentDiaryForm.init) {
                    AppointmentDiaryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(AppointmentDiaryForm, [
                        'Title', w0,
                        'SomeImportantKey', w1,
                        'DateTimeScheduled', w2,
                        'AppointmentLength', w1,
                        'StatusEnum', w1,
                        'DibuatOleh', w0,
                        'DibuatTanggal', w2,
                        'DieditOleh', w0,
                        'DieditTanggal', w2,
                        'SystemStatus', w3,
                        'KodeRt', w0
                    ]);
                }
                return _this;
            }
            AppointmentDiaryForm.formKey = 'Rukuntangga.AppointmentDiary';
            return AppointmentDiaryForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.AppointmentDiaryForm = AppointmentDiaryForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var AppointmentDiaryRow;
        (function (AppointmentDiaryRow) {
            AppointmentDiaryRow.idProperty = 'Id';
            AppointmentDiaryRow.nameProperty = 'Title';
            AppointmentDiaryRow.localTextPrefix = 'Rukuntangga.AppointmentDiary';
            AppointmentDiaryRow.deletePermission = 'Master:Appointment:Delete';
            AppointmentDiaryRow.insertPermission = 'Master:Appointment:Insert';
            AppointmentDiaryRow.readPermission = 'Master:Appointment:View';
            AppointmentDiaryRow.updatePermission = 'Master:Appointment:Modify';
        })(AppointmentDiaryRow = Rukuntangga.AppointmentDiaryRow || (Rukuntangga.AppointmentDiaryRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var AppointmentDiaryService;
        (function (AppointmentDiaryService) {
            AppointmentDiaryService.baseUrl = 'Rukuntangga/AppointmentDiary';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AppointmentDiaryService[x] = function (r, s, o) {
                    return Q.serviceRequest(AppointmentDiaryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AppointmentDiaryService = Rukuntangga.AppointmentDiaryService || (Rukuntangga.AppointmentDiaryService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbAutentikasiTokenForm = /** @class */ (function (_super) {
            __extends(TbAutentikasiTokenForm, _super);
            function TbAutentikasiTokenForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbAutentikasiTokenForm.init) {
                    TbAutentikasiTokenForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TbAutentikasiTokenForm, [
                        'Token', w0,
                        'Aplikasi', w0
                    ]);
                }
                return _this;
            }
            TbAutentikasiTokenForm.formKey = 'Rukuntangga.TbAutentikasiToken';
            return TbAutentikasiTokenForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbAutentikasiTokenForm = TbAutentikasiTokenForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbAutentikasiTokenRow;
        (function (TbAutentikasiTokenRow) {
            TbAutentikasiTokenRow.idProperty = 'Id';
            TbAutentikasiTokenRow.nameProperty = 'Token';
            TbAutentikasiTokenRow.localTextPrefix = 'Rukuntangga.TbAutentikasiToken';
            TbAutentikasiTokenRow.deletePermission = 'Security:AutentikasiToken';
            TbAutentikasiTokenRow.insertPermission = 'Security:AutentikasiToken';
            TbAutentikasiTokenRow.readPermission = 'Security:AutentikasiToken';
            TbAutentikasiTokenRow.updatePermission = 'Security:AutentikasiToken';
        })(TbAutentikasiTokenRow = Rukuntangga.TbAutentikasiTokenRow || (Rukuntangga.TbAutentikasiTokenRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbAutentikasiTokenService;
        (function (TbAutentikasiTokenService) {
            TbAutentikasiTokenService.baseUrl = 'Rukuntangga/TbAutentikasiToken';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbAutentikasiTokenService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbAutentikasiTokenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbAutentikasiTokenService = Rukuntangga.TbAutentikasiTokenService || (Rukuntangga.TbAutentikasiTokenService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbBiodataForm = /** @class */ (function (_super) {
            __extends(TbBiodataForm, _super);
            function TbBiodataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbBiodataForm.init) {
                    TbBiodataForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TbBiodataForm, [
                        'Nik', w0,
                        'Gelar', w0,
                        'Tahun', w0,
                        'Deskripsi', w0
                    ]);
                }
                return _this;
            }
            TbBiodataForm.formKey = 'Rukuntangga.TbBiodata';
            return TbBiodataForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbBiodataForm = TbBiodataForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbBiodataRow;
        (function (TbBiodataRow) {
            TbBiodataRow.idProperty = 'Id';
            TbBiodataRow.nameProperty = 'Nik';
            TbBiodataRow.localTextPrefix = 'Rukuntangga.TbBiodata';
            TbBiodataRow.deletePermission = 'Master:RW:Delete';
            TbBiodataRow.insertPermission = 'Master:RW:Insert';
            TbBiodataRow.readPermission = 'Master:RW:View';
            TbBiodataRow.updatePermission = 'Master:RW:Modify';
        })(TbBiodataRow = Rukuntangga.TbBiodataRow || (Rukuntangga.TbBiodataRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbBiodataService;
        (function (TbBiodataService) {
            TbBiodataService.baseUrl = 'Rukuntangga/TbBiodata';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbBiodataService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbBiodataService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbBiodataService = Rukuntangga.TbBiodataService || (Rukuntangga.TbBiodataService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailJenisInformasiForm = /** @class */ (function (_super) {
            __extends(TbDetailJenisInformasiForm, _super);
            function TbDetailJenisInformasiForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbDetailJenisInformasiForm.init) {
                    TbDetailJenisInformasiForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.HtmlContentEditor;
                    var w3 = AbidzarFrm.Common.Editor.LevelAreaEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(TbDetailJenisInformasiForm, [
                        'Judul', w0,
                        'NamaFile', w1,
                        'Deskripsi', w2,
                        'LevelArea', w3,
                        'IsLandingPage', w4
                    ]);
                }
                return _this;
            }
            TbDetailJenisInformasiForm.formKey = 'Rukuntangga.TbDetailJenisInformasi';
            return TbDetailJenisInformasiForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbDetailJenisInformasiForm = TbDetailJenisInformasiForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailJenisInformasiRow;
        (function (TbDetailJenisInformasiRow) {
            TbDetailJenisInformasiRow.idProperty = 'Id';
            TbDetailJenisInformasiRow.nameProperty = 'Judul';
            TbDetailJenisInformasiRow.localTextPrefix = 'Rukuntangga.TbDetailJenisInformasi';
            TbDetailJenisInformasiRow.deletePermission = 'Informasi:Delete';
            TbDetailJenisInformasiRow.insertPermission = 'Informasi:Insert';
            TbDetailJenisInformasiRow.readPermission = 'Informasi:View';
            TbDetailJenisInformasiRow.updatePermission = 'Informasi:Modify';
        })(TbDetailJenisInformasiRow = Rukuntangga.TbDetailJenisInformasiRow || (Rukuntangga.TbDetailJenisInformasiRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailJenisInformasiService;
        (function (TbDetailJenisInformasiService) {
            TbDetailJenisInformasiService.baseUrl = 'Rukuntangga/TbDetailJenisInformasi';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbDetailJenisInformasiService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbDetailJenisInformasiService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbDetailJenisInformasiService = Rukuntangga.TbDetailJenisInformasiService || (Rukuntangga.TbDetailJenisInformasiService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailJenisKegiatanForm = /** @class */ (function (_super) {
            __extends(TbDetailJenisKegiatanForm, _super);
            function TbDetailJenisKegiatanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbDetailJenisKegiatanForm.init) {
                    TbDetailJenisKegiatanForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.DateEditor;
                    var w4 = AbidzarFrm.Common.Editor.WarnaEditor;
                    var w5 = AbidzarFrm.Common.Editor.LevelAreaEditor;
                    var w6 = s.MultipleImageUploadEditor;
                    Q.initFormType(TbDetailJenisKegiatanForm, [
                        'NamaKegiatan', w0,
                        'NamaFile', w1,
                        'Lokasi', w0,
                        'Deskripsi', w2,
                        'TanggalKegiatan', w3,
                        'WarnaLatar', w4,
                        'LevelArea', w5,
                        'Dokumentasi', w6
                    ]);
                }
                return _this;
            }
            TbDetailJenisKegiatanForm.formKey = 'Rukuntangga.TbDetailJenisKegiatan';
            return TbDetailJenisKegiatanForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbDetailJenisKegiatanForm = TbDetailJenisKegiatanForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailJenisKegiatanRow;
        (function (TbDetailJenisKegiatanRow) {
            TbDetailJenisKegiatanRow.idProperty = 'Id';
            TbDetailJenisKegiatanRow.nameProperty = 'NamaKegiatan';
            TbDetailJenisKegiatanRow.localTextPrefix = 'Rukuntangga.TbDetailJenisKegiatan';
            TbDetailJenisKegiatanRow.deletePermission = 'Kegiatan:Delete';
            TbDetailJenisKegiatanRow.insertPermission = 'Kegiatan:Insert';
            TbDetailJenisKegiatanRow.readPermission = 'Kegiatan:View';
            TbDetailJenisKegiatanRow.updatePermission = 'Kegiatan:Modify';
        })(TbDetailJenisKegiatanRow = Rukuntangga.TbDetailJenisKegiatanRow || (Rukuntangga.TbDetailJenisKegiatanRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailJenisKegiatanService;
        (function (TbDetailJenisKegiatanService) {
            TbDetailJenisKegiatanService.baseUrl = 'Rukuntangga/TbDetailJenisKegiatan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbDetailJenisKegiatanService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbDetailJenisKegiatanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbDetailJenisKegiatanService = Rukuntangga.TbDetailJenisKegiatanService || (Rukuntangga.TbDetailJenisKegiatanService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailPemiluForm = /** @class */ (function (_super) {
            __extends(TbDetailPemiluForm, _super);
            function TbDetailPemiluForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbDetailPemiluForm.init) {
                    TbDetailPemiluForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.HtmlContentEditor;
                    Q.initFormType(TbDetailPemiluForm, [
                        'NoUrut', w0,
                        'Kandidat', w1,
                        'FileName', w2,
                        'Deskripsi', w3
                    ]);
                }
                return _this;
            }
            TbDetailPemiluForm.formKey = 'Rukuntangga.TbDetailPemilu';
            return TbDetailPemiluForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbDetailPemiluForm = TbDetailPemiluForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailPemiluRow;
        (function (TbDetailPemiluRow) {
            TbDetailPemiluRow.idProperty = 'Id';
            TbDetailPemiluRow.nameProperty = 'Kandidat';
            TbDetailPemiluRow.localTextPrefix = 'Rukuntangga.TbDetailPemilu';
            TbDetailPemiluRow.deletePermission = 'Questioner:Pemilu:Delete';
            TbDetailPemiluRow.insertPermission = 'Questioner:Pemilu:Insert';
            TbDetailPemiluRow.readPermission = 'Questioner:Pemilu:View';
            TbDetailPemiluRow.updatePermission = 'Questioner:Pemilu:Modify';
        })(TbDetailPemiluRow = Rukuntangga.TbDetailPemiluRow || (Rukuntangga.TbDetailPemiluRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailPemiluService;
        (function (TbDetailPemiluService) {
            TbDetailPemiluService.baseUrl = 'Rukuntangga/TbDetailPemilu';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbDetailPemiluService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbDetailPemiluService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbDetailPemiluService = Rukuntangga.TbDetailPemiluService || (Rukuntangga.TbDetailPemiluService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDokumentasiDetailJenisKegiatanForm = /** @class */ (function (_super) {
            __extends(TbDokumentasiDetailJenisKegiatanForm, _super);
            function TbDokumentasiDetailJenisKegiatanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbDokumentasiDetailJenisKegiatanForm.init) {
                    TbDokumentasiDetailJenisKegiatanForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.ImageUploadEditor;
                    Q.initFormType(TbDokumentasiDetailJenisKegiatanForm, [
                        'IdDetailJenisKegiatan', w0,
                        'NamaFile', w1
                    ]);
                }
                return _this;
            }
            TbDokumentasiDetailJenisKegiatanForm.formKey = 'Rukuntangga.TbDokumentasiDetailJenisKegiatan';
            return TbDokumentasiDetailJenisKegiatanForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbDokumentasiDetailJenisKegiatanForm = TbDokumentasiDetailJenisKegiatanForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDokumentasiDetailJenisKegiatanRow;
        (function (TbDokumentasiDetailJenisKegiatanRow) {
            TbDokumentasiDetailJenisKegiatanRow.idProperty = 'Id';
            TbDokumentasiDetailJenisKegiatanRow.nameProperty = 'NamaFile';
            TbDokumentasiDetailJenisKegiatanRow.localTextPrefix = 'Rukuntangga.TbDokumentasiDetailJenisKegiatan';
            TbDokumentasiDetailJenisKegiatanRow.deletePermission = 'Kegiatan:Delete';
            TbDokumentasiDetailJenisKegiatanRow.insertPermission = 'Kegiatan:Insert';
            TbDokumentasiDetailJenisKegiatanRow.readPermission = 'Kegiatan:View';
            TbDokumentasiDetailJenisKegiatanRow.updatePermission = 'Kegiatan:Modify';
        })(TbDokumentasiDetailJenisKegiatanRow = Rukuntangga.TbDokumentasiDetailJenisKegiatanRow || (Rukuntangga.TbDokumentasiDetailJenisKegiatanRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDokumentasiDetailJenisKegiatanService;
        (function (TbDokumentasiDetailJenisKegiatanService) {
            TbDokumentasiDetailJenisKegiatanService.baseUrl = 'Rukuntangga/TbDokumentasiDetailJenisKegiatan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbDokumentasiDetailJenisKegiatanService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbDokumentasiDetailJenisKegiatanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbDokumentasiDetailJenisKegiatanService = Rukuntangga.TbDokumentasiDetailJenisKegiatanService || (Rukuntangga.TbDokumentasiDetailJenisKegiatanService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbEmailTemplateForm = /** @class */ (function (_super) {
            __extends(TbEmailTemplateForm, _super);
            function TbEmailTemplateForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbEmailTemplateForm.init) {
                    TbEmailTemplateForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(TbEmailTemplateForm, [
                        'KodeTemplate', w0,
                        'Subject', w1,
                        'Template', w1
                    ]);
                }
                return _this;
            }
            TbEmailTemplateForm.formKey = 'Rukuntangga.TbEmailTemplate';
            return TbEmailTemplateForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbEmailTemplateForm = TbEmailTemplateForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbEmailTemplateRow;
        (function (TbEmailTemplateRow) {
            TbEmailTemplateRow.idProperty = 'Id';
            TbEmailTemplateRow.nameProperty = 'KodeTemplate';
            TbEmailTemplateRow.localTextPrefix = 'Rukuntangga.TbEmailTemplate';
            TbEmailTemplateRow.lookupKey = 'Rukuntangga.EmailTemplate';
            function getLookup() {
                return Q.getLookup('Rukuntangga.EmailTemplate');
            }
            TbEmailTemplateRow.getLookup = getLookup;
            TbEmailTemplateRow.deletePermission = 'Security:EmailTemplate';
            TbEmailTemplateRow.insertPermission = 'Security:EmailTemplate';
            TbEmailTemplateRow.readPermission = 'Security:EmailTemplate';
            TbEmailTemplateRow.updatePermission = 'Security:EmailTemplate';
        })(TbEmailTemplateRow = Rukuntangga.TbEmailTemplateRow || (Rukuntangga.TbEmailTemplateRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbEmailTemplateService;
        (function (TbEmailTemplateService) {
            TbEmailTemplateService.baseUrl = 'Rukuntangga/TbEmailTemplate';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbEmailTemplateService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbEmailTemplateService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbEmailTemplateService = Rukuntangga.TbEmailTemplateService || (Rukuntangga.TbEmailTemplateService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbGaleryForm = /** @class */ (function (_super) {
            __extends(TbGaleryForm, _super);
            function TbGaleryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbGaleryForm.init) {
                    TbGaleryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = AbidzarFrm.Common.Editor.LevelAreaEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.MultipleImageUploadEditor;
                    Q.initFormType(TbGaleryForm, [
                        'Deskripsi', w0,
                        'LevelArea', w1,
                        'Thumbnail', w2,
                        'Photos', w3
                    ]);
                }
                return _this;
            }
            TbGaleryForm.formKey = 'Rukuntangga.TbGalery';
            return TbGaleryForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbGaleryForm = TbGaleryForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbGaleryRow;
        (function (TbGaleryRow) {
            TbGaleryRow.idProperty = 'Id';
            TbGaleryRow.nameProperty = 'Deskripsi';
            TbGaleryRow.localTextPrefix = 'Rukuntangga.TbGalery';
            TbGaleryRow.lookupKey = 'Rukuntangga.Galery';
            function getLookup() {
                return Q.getLookup('Rukuntangga.Galery');
            }
            TbGaleryRow.getLookup = getLookup;
            TbGaleryRow.deletePermission = 'Master:Galery:Delete';
            TbGaleryRow.insertPermission = 'Master:Galery:Insert';
            TbGaleryRow.readPermission = 'Master:Galery:View';
            TbGaleryRow.updatePermission = 'Master:Galery:Modify';
        })(TbGaleryRow = Rukuntangga.TbGaleryRow || (Rukuntangga.TbGaleryRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbGaleryService;
        (function (TbGaleryService) {
            TbGaleryService.baseUrl = 'Rukuntangga/TbGalery';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbGaleryService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbGaleryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbGaleryService = Rukuntangga.TbGaleryService || (Rukuntangga.TbGaleryService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbHistoricalUserLoginForm = /** @class */ (function (_super) {
            __extends(TbHistoricalUserLoginForm, _super);
            function TbHistoricalUserLoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbHistoricalUserLoginForm.init) {
                    TbHistoricalUserLoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TbHistoricalUserLoginForm, [
                        'Nik', w0,
                        'IsMobile', w1,
                        'Login', w2,
                        'Logout', w2
                    ]);
                }
                return _this;
            }
            TbHistoricalUserLoginForm.formKey = 'Rukuntangga.TbHistoricalUserLogin';
            return TbHistoricalUserLoginForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbHistoricalUserLoginForm = TbHistoricalUserLoginForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbHistoricalUserLoginRow;
        (function (TbHistoricalUserLoginRow) {
            TbHistoricalUserLoginRow.idProperty = 'Id';
            TbHistoricalUserLoginRow.nameProperty = 'Nik';
            TbHistoricalUserLoginRow.localTextPrefix = 'Rukuntangga.TbHistoricalUserLogin';
            TbHistoricalUserLoginRow.deletePermission = 'Security:HistorycalLogin';
            TbHistoricalUserLoginRow.insertPermission = 'Security:HistorycalLogin';
            TbHistoricalUserLoginRow.readPermission = 'Security:HistorycalLogin';
            TbHistoricalUserLoginRow.updatePermission = 'Security:HistorycalLogin';
        })(TbHistoricalUserLoginRow = Rukuntangga.TbHistoricalUserLoginRow || (Rukuntangga.TbHistoricalUserLoginRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbHistoricalUserLoginService;
        (function (TbHistoricalUserLoginService) {
            TbHistoricalUserLoginService.baseUrl = 'Rukuntangga/TbHistoricalUserLogin';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbHistoricalUserLoginService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbHistoricalUserLoginService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbHistoricalUserLoginService = Rukuntangga.TbHistoricalUserLoginService || (Rukuntangga.TbHistoricalUserLoginService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJabatanForm = /** @class */ (function (_super) {
            __extends(TbJabatanForm, _super);
            function TbJabatanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbJabatanForm.init) {
                    TbJabatanForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TbJabatanForm, [
                        'NamaJabatan', w0
                    ]);
                }
                return _this;
            }
            TbJabatanForm.formKey = 'Rukuntangga.TbJabatan';
            return TbJabatanForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbJabatanForm = TbJabatanForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJabatanRow;
        (function (TbJabatanRow) {
            TbJabatanRow.idProperty = 'Id';
            TbJabatanRow.nameProperty = 'NamaJabatan';
            TbJabatanRow.localTextPrefix = 'Rukuntangga.TbJabatan';
            TbJabatanRow.lookupKey = 'Rukuntangga.Jabatan';
            function getLookup() {
                return Q.getLookup('Rukuntangga.Jabatan');
            }
            TbJabatanRow.getLookup = getLookup;
            TbJabatanRow.deletePermission = 'Master:Jabatan:Delete';
            TbJabatanRow.insertPermission = 'Master:Jabatan:Insert';
            TbJabatanRow.readPermission = 'Master:Jabatan:View';
            TbJabatanRow.updatePermission = 'Master:Jabatan:Modify';
        })(TbJabatanRow = Rukuntangga.TbJabatanRow || (Rukuntangga.TbJabatanRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJabatanService;
        (function (TbJabatanService) {
            TbJabatanService.baseUrl = 'Rukuntangga/TbJabatan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbJabatanService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbJabatanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbJabatanService = Rukuntangga.TbJabatanService || (Rukuntangga.TbJabatanService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJadwalSiskamlimForm = /** @class */ (function (_super) {
            __extends(TbJadwalSiskamlimForm, _super);
            function TbJadwalSiskamlimForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbJadwalSiskamlimForm.init) {
                    TbJadwalSiskamlimForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(TbJadwalSiskamlimForm, [
                        'Nik', w0,
                        'Nama', w0,
                        'Tanggal', w1,
                        'DibuatOleh', w0,
                        'DibuatTanggal', w1,
                        'DieditOleh', w0,
                        'DieditTanggal', w1,
                        'SystemStatus', w2
                    ]);
                }
                return _this;
            }
            TbJadwalSiskamlimForm.formKey = 'Rukuntangga.TbJadwalSiskamlim';
            return TbJadwalSiskamlimForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbJadwalSiskamlimForm = TbJadwalSiskamlimForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJadwalSiskamlimRow;
        (function (TbJadwalSiskamlimRow) {
            TbJadwalSiskamlimRow.idProperty = 'Id';
            TbJadwalSiskamlimRow.nameProperty = 'Nik';
            TbJadwalSiskamlimRow.localTextPrefix = 'Rukuntangga.TbJadwalSiskamlim';
            TbJadwalSiskamlimRow.deletePermission = 'Master:JadwalSiskamling:Delete';
            TbJadwalSiskamlimRow.insertPermission = 'Master:JadwalSiskamling:Insert';
            TbJadwalSiskamlimRow.readPermission = 'Master:JadwalSiskamling:View';
            TbJadwalSiskamlimRow.updatePermission = 'Master:JadwalSiskamling:Modify';
        })(TbJadwalSiskamlimRow = Rukuntangga.TbJadwalSiskamlimRow || (Rukuntangga.TbJadwalSiskamlimRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJadwalSiskamlimService;
        (function (TbJadwalSiskamlimService) {
            TbJadwalSiskamlimService.baseUrl = 'Rukuntangga/TbJadwalSiskamlim';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbJadwalSiskamlimService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbJadwalSiskamlimService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbJadwalSiskamlimService = Rukuntangga.TbJadwalSiskamlimService || (Rukuntangga.TbJadwalSiskamlimService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJenisInformasiForm = /** @class */ (function (_super) {
            __extends(TbJenisInformasiForm, _super);
            function TbJenisInformasiForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbJenisInformasiForm.init) {
                    TbJenisInformasiForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Rukuntangga.TbDetailJenisInformasiEditor;
                    Q.initFormType(TbJenisInformasiForm, [
                        'JenisInformasi', w0,
                        'tbDetailJenisInformasiRow', w1
                    ]);
                }
                return _this;
            }
            TbJenisInformasiForm.formKey = 'Rukuntangga.TbJenisInformasi';
            return TbJenisInformasiForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbJenisInformasiForm = TbJenisInformasiForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJenisInformasiRow;
        (function (TbJenisInformasiRow) {
            TbJenisInformasiRow.idProperty = 'Id';
            TbJenisInformasiRow.nameProperty = 'JenisInformasi';
            TbJenisInformasiRow.localTextPrefix = 'Rukuntangga.TbJenisInformasi';
            TbJenisInformasiRow.deletePermission = 'Informasi:Delete';
            TbJenisInformasiRow.insertPermission = 'Informasi:Insert';
            TbJenisInformasiRow.readPermission = 'Informasi:View';
            TbJenisInformasiRow.updatePermission = 'Informasi:Modify';
        })(TbJenisInformasiRow = Rukuntangga.TbJenisInformasiRow || (Rukuntangga.TbJenisInformasiRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJenisInformasiService;
        (function (TbJenisInformasiService) {
            TbJenisInformasiService.baseUrl = 'Rukuntangga/TbJenisInformasi';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbJenisInformasiService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbJenisInformasiService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbJenisInformasiService = Rukuntangga.TbJenisInformasiService || (Rukuntangga.TbJenisInformasiService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJenisKegiatanForm = /** @class */ (function (_super) {
            __extends(TbJenisKegiatanForm, _super);
            function TbJenisKegiatanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbJenisKegiatanForm.init) {
                    TbJenisKegiatanForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Rukuntangga.TbDetailJenisKegiatanEditor;
                    Q.initFormType(TbJenisKegiatanForm, [
                        'JenisKegiatan', w0,
                        'Deskripsi', w0,
                        'tbDetailJenisKegiatanRow', w1
                    ]);
                }
                return _this;
            }
            TbJenisKegiatanForm.formKey = 'Rukuntangga.TbJenisKegiatan';
            return TbJenisKegiatanForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbJenisKegiatanForm = TbJenisKegiatanForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJenisKegiatanRow;
        (function (TbJenisKegiatanRow) {
            TbJenisKegiatanRow.idProperty = 'Id';
            TbJenisKegiatanRow.nameProperty = 'JenisKegiatan';
            TbJenisKegiatanRow.localTextPrefix = 'Rukuntangga.TbJenisKegiatan';
            TbJenisKegiatanRow.deletePermission = 'Kegiatan:Delete';
            TbJenisKegiatanRow.insertPermission = 'Kegiatan:Insert';
            TbJenisKegiatanRow.readPermission = 'Kegiatan:View';
            TbJenisKegiatanRow.updatePermission = 'Kegiatan:Modify';
        })(TbJenisKegiatanRow = Rukuntangga.TbJenisKegiatanRow || (Rukuntangga.TbJenisKegiatanRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJenisKegiatanService;
        (function (TbJenisKegiatanService) {
            TbJenisKegiatanService.baseUrl = 'Rukuntangga/TbJenisKegiatan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbJenisKegiatanService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbJenisKegiatanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbJenisKegiatanService = Rukuntangga.TbJenisKegiatanService || (Rukuntangga.TbJenisKegiatanService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKecamatanForm = /** @class */ (function (_super) {
            __extends(TbKecamatanForm, _super);
            function TbKecamatanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbKecamatanForm.init) {
                    TbKecamatanForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(TbKecamatanForm, [
                        'IdKota', w0,
                        'KodeKecamatan', w1,
                        'NamaKecamatan', w1
                    ]);
                }
                return _this;
            }
            TbKecamatanForm.formKey = 'Rukuntangga.TbKecamatan';
            return TbKecamatanForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbKecamatanForm = TbKecamatanForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKecamatanRow;
        (function (TbKecamatanRow) {
            TbKecamatanRow.idProperty = 'Id';
            TbKecamatanRow.nameProperty = 'KodeKecamatan';
            TbKecamatanRow.localTextPrefix = 'Rukuntangga.TbKecamatan';
            TbKecamatanRow.lookupKey = 'Rukuntangga.Kecamatan';
            function getLookup() {
                return Q.getLookup('Rukuntangga.Kecamatan');
            }
            TbKecamatanRow.getLookup = getLookup;
            TbKecamatanRow.deletePermission = 'Master:Kecamatan:Delete';
            TbKecamatanRow.insertPermission = 'Master:Kecamatan:Insert';
            TbKecamatanRow.readPermission = 'Master:Kecamatan:View';
            TbKecamatanRow.updatePermission = 'Master:Kecamatan:Modify';
        })(TbKecamatanRow = Rukuntangga.TbKecamatanRow || (Rukuntangga.TbKecamatanRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKecamatanService;
        (function (TbKecamatanService) {
            TbKecamatanService.baseUrl = 'Rukuntangga/TbKecamatan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbKecamatanService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbKecamatanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbKecamatanService = Rukuntangga.TbKecamatanService || (Rukuntangga.TbKecamatanService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKelurahanForm = /** @class */ (function (_super) {
            __extends(TbKelurahanForm, _super);
            function TbKelurahanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbKelurahanForm.init) {
                    TbKelurahanForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(TbKelurahanForm, [
                        'IdKecamatan', w0,
                        'KodeKelurahan', w1,
                        'NamaKelurahan', w1
                    ]);
                }
                return _this;
            }
            TbKelurahanForm.formKey = 'Rukuntangga.TbKelurahan';
            return TbKelurahanForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbKelurahanForm = TbKelurahanForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKelurahanRow;
        (function (TbKelurahanRow) {
            TbKelurahanRow.idProperty = 'Id';
            TbKelurahanRow.nameProperty = 'KodeKelurahan';
            TbKelurahanRow.localTextPrefix = 'Rukuntangga.TbKelurahan';
            TbKelurahanRow.lookupKey = 'Rukuntangga.Kelurahan';
            function getLookup() {
                return Q.getLookup('Rukuntangga.Kelurahan');
            }
            TbKelurahanRow.getLookup = getLookup;
            TbKelurahanRow.deletePermission = 'Master:Kelurahan:Delete';
            TbKelurahanRow.insertPermission = 'Master:Kelurahan:Insert';
            TbKelurahanRow.readPermission = 'Master:Kelurahan:View';
            TbKelurahanRow.updatePermission = 'Master:Kelurahan:Modify';
        })(TbKelurahanRow = Rukuntangga.TbKelurahanRow || (Rukuntangga.TbKelurahanRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKelurahanService;
        (function (TbKelurahanService) {
            TbKelurahanService.baseUrl = 'Rukuntangga/TbKelurahan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbKelurahanService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbKelurahanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbKelurahanService = Rukuntangga.TbKelurahanService || (Rukuntangga.TbKelurahanService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKotaForm = /** @class */ (function (_super) {
            __extends(TbKotaForm, _super);
            function TbKotaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbKotaForm.init) {
                    TbKotaForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(TbKotaForm, [
                        'IdProvinsi', w0,
                        'KodeKota', w1,
                        'NamaKota', w1
                    ]);
                }
                return _this;
            }
            TbKotaForm.formKey = 'Rukuntangga.TbKota';
            return TbKotaForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbKotaForm = TbKotaForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKotaRow;
        (function (TbKotaRow) {
            TbKotaRow.idProperty = 'Id';
            TbKotaRow.nameProperty = 'KodeKota';
            TbKotaRow.localTextPrefix = 'Rukuntangga.TbKota';
            TbKotaRow.lookupKey = 'Rukuntangga.Kota';
            function getLookup() {
                return Q.getLookup('Rukuntangga.Kota');
            }
            TbKotaRow.getLookup = getLookup;
            TbKotaRow.deletePermission = 'Master:Kota:Delete';
            TbKotaRow.insertPermission = 'Master:Kota:Insert';
            TbKotaRow.readPermission = 'Master:Kota:View';
            TbKotaRow.updatePermission = 'Master:Kota:Modify';
        })(TbKotaRow = Rukuntangga.TbKotaRow || (Rukuntangga.TbKotaRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKotaService;
        (function (TbKotaService) {
            TbKotaService.baseUrl = 'Rukuntangga/TbKota';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbKotaService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbKotaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbKotaService = Rukuntangga.TbKotaService || (Rukuntangga.TbKotaService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKtpForm = /** @class */ (function (_super) {
            __extends(TbKtpForm, _super);
            function TbKtpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbKtpForm.init) {
                    TbKtpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = AbidzarFrm.Common.Editor.DataStatusEditor;
                    var w2 = s.DateEditor;
                    var w3 = AbidzarFrm.Common.Editor.AgamaEditor;
                    var w4 = AbidzarFrm.Common.Editor.JenisKelaminEditor;
                    var w5 = s.LookupEditor;
                    var w6 = AbidzarFrm.Common.Editor.SelectEditor;
                    var w7 = s.TextAreaEditor;
                    var w8 = AbidzarFrm.Common.Editor.Sequens3Editor;
                    var w9 = AbidzarFrm.Common.Editor.StatusEditor;
                    var w10 = AbidzarFrm.Common.Editor.WargaNegaraEditor;
                    var w11 = AbidzarFrm.Common.Editor.PekerjaanEditor;
                    var w12 = AbidzarFrm.Common.Editor.GolonganDarahEditor;
                    var w13 = AbidzarFrm.Common.Editor.PendidikanEditor;
                    var w14 = s.ImageUploadEditor;
                    var w15 = AbidzarFrm.Common.Editor.YesNoEditor;
                    var w16 = s.MultipleImageUploadEditor;
                    Q.initFormType(TbKtpForm, [
                        'Kk', w0,
                        'Nik', w0,
                        'Nama', w0,
                        'DataStatus', w1,
                        'TempatLahir', w0,
                        'TanggalLahir', w2,
                        'Agama', w3,
                        'JenisKelamin', w4,
                        'IdProvinsi', w5,
                        'IdKota', w6,
                        'IdKecamatan', w6,
                        'IdKelurahan', w6,
                        'Alamat', w7,
                        'Rt', w8,
                        'Rw', w8,
                        'KodePos', w0,
                        'StatusPerkawinan', w9,
                        'TanggalPerkawinan', w2,
                        'Kewarganegaraan', w10,
                        'JenisPekerjaan', w11,
                        'GolonganDarah', w12,
                        'Pendidikan', w13,
                        'PhotoKtp', w14,
                        'SignatureKtp', w14,
                        'NamaAyah', w0,
                        'NamaIbu', w0,
                        'TinggalSesuaiKtp', w15,
                        'IdProvinsiTinggal', w5,
                        'IdKotaTinggal', w6,
                        'IdKecamatanTinggal', w6,
                        'IdKelurahanTinggal', w6,
                        'AlamatTinggal', w0,
                        'RtTinggal', w8,
                        'RwTinggal', w8,
                        'PhotoRumah', w14,
                        'KodeRt', w0,
                        'Attachment', w16
                    ]);
                }
                return _this;
            }
            TbKtpForm.formKey = 'Rukuntangga.TbKtp';
            return TbKtpForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbKtpForm = TbKtpForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKtpRow;
        (function (TbKtpRow) {
            TbKtpRow.idProperty = 'Id';
            TbKtpRow.nameProperty = 'Nik';
            TbKtpRow.localTextPrefix = 'Rukuntangga.TbKtp';
            TbKtpRow.lookupKey = 'Rukuntangga.Ktp';
            function getLookup() {
                return Q.getLookup('Rukuntangga.Ktp');
            }
            TbKtpRow.getLookup = getLookup;
            TbKtpRow.deletePermission = 'Master:Ktp:Delete';
            TbKtpRow.insertPermission = 'Master:Ktp:Insert';
            TbKtpRow.readPermission = 'Master:Ktp:View';
            TbKtpRow.updatePermission = 'Master:Ktp:Modify';
        })(TbKtpRow = Rukuntangga.TbKtpRow || (Rukuntangga.TbKtpRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKtpService;
        (function (TbKtpService) {
            TbKtpService.baseUrl = 'Rukuntangga/TbKtp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbKtpService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbKtpService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbKtpService = Rukuntangga.TbKtpService || (Rukuntangga.TbKtpService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbLaporanKasForm = /** @class */ (function (_super) {
            __extends(TbLaporanKasForm, _super);
            function TbLaporanKasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbLaporanKasForm.init) {
                    TbLaporanKasForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(TbLaporanKasForm, [
                        'Deskripsi', w0,
                        'Tanggal', w1,
                        'Total', w2,
                        'Tipe', w0,
                        'DibuatOleh', w0,
                        'DibuatTanggal', w1,
                        'DieditOleh', w0,
                        'DieditTanggal', w1,
                        'SystemStatus', w3,
                        'KodeRt', w0
                    ]);
                }
                return _this;
            }
            TbLaporanKasForm.formKey = 'Rukuntangga.TbLaporanKas';
            return TbLaporanKasForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbLaporanKasForm = TbLaporanKasForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbLaporanKasRow;
        (function (TbLaporanKasRow) {
            TbLaporanKasRow.idProperty = 'Id';
            TbLaporanKasRow.nameProperty = 'Deskripsi';
            TbLaporanKasRow.localTextPrefix = 'Rukuntangga.TbLaporanKas';
            TbLaporanKasRow.deletePermission = 'Master:LaporanKas:Delete';
            TbLaporanKasRow.insertPermission = 'Master:LaporanKas:Insert';
            TbLaporanKasRow.readPermission = 'Master:LaporanKas:View';
            TbLaporanKasRow.updatePermission = 'Master:LaporanKas:Modify';
        })(TbLaporanKasRow = Rukuntangga.TbLaporanKasRow || (Rukuntangga.TbLaporanKasRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbLaporanKasService;
        (function (TbLaporanKasService) {
            TbLaporanKasService.baseUrl = 'Rukuntangga/TbLaporanKas';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbLaporanKasService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbLaporanKasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbLaporanKasService = Rukuntangga.TbLaporanKasService || (Rukuntangga.TbLaporanKasService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbListOfValueForm = /** @class */ (function (_super) {
            __extends(TbListOfValueForm, _super);
            function TbListOfValueForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbListOfValueForm.init) {
                    TbListOfValueForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TbListOfValueForm, [
                        'Kode', w0,
                        'Deskripsi', w0,
                        'Value', w0,
                        'Group', w0
                    ]);
                }
                return _this;
            }
            TbListOfValueForm.formKey = 'Rukuntangga.TbListOfValue';
            return TbListOfValueForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbListOfValueForm = TbListOfValueForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbListOfValueRow;
        (function (TbListOfValueRow) {
            TbListOfValueRow.idProperty = 'Id';
            TbListOfValueRow.nameProperty = 'Kode';
            TbListOfValueRow.localTextPrefix = 'Rukuntangga.TbListOfValue';
            TbListOfValueRow.deletePermission = 'Security:ListOfValue';
            TbListOfValueRow.insertPermission = 'Security:ListOfValue';
            TbListOfValueRow.readPermission = 'Security:ListOfValue';
            TbListOfValueRow.updatePermission = 'Security:ListOfValue';
        })(TbListOfValueRow = Rukuntangga.TbListOfValueRow || (Rukuntangga.TbListOfValueRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbListOfValueService;
        (function (TbListOfValueService) {
            TbListOfValueService.baseUrl = 'Rukuntangga/TbListOfValue';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbListOfValueService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbListOfValueService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbListOfValueService = Rukuntangga.TbListOfValueService || (Rukuntangga.TbListOfValueService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbMailLogForm = /** @class */ (function (_super) {
            __extends(TbMailLogForm, _super);
            function TbMailLogForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbMailLogForm.init) {
                    TbMailLogForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(TbMailLogForm, [
                        'Subject', w0,
                        'Body', w1,
                        'From', w0,
                        'To', w1,
                        'Cc', w1,
                        'Status', w2,
                        'ErrorMessage', w1
                    ]);
                }
                return _this;
            }
            TbMailLogForm.formKey = 'Rukuntangga.TbMailLog';
            return TbMailLogForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbMailLogForm = TbMailLogForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbMailLogRow;
        (function (TbMailLogRow) {
            TbMailLogRow.idProperty = 'Id';
            TbMailLogRow.nameProperty = 'Subject';
            TbMailLogRow.localTextPrefix = 'Rukuntangga.TbMailLog';
            TbMailLogRow.deletePermission = '*';
            TbMailLogRow.insertPermission = '*';
            TbMailLogRow.readPermission = '*';
            TbMailLogRow.updatePermission = '*';
        })(TbMailLogRow = Rukuntangga.TbMailLogRow || (Rukuntangga.TbMailLogRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbMailLogService;
        (function (TbMailLogService) {
            TbMailLogService.baseUrl = 'Rukuntangga/TbMailLog';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'SendEmail'
            ].forEach(function (x) {
                TbMailLogService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbMailLogService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbMailLogService = Rukuntangga.TbMailLogService || (Rukuntangga.TbMailLogService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbParameterForm = /** @class */ (function (_super) {
            __extends(TbParameterForm, _super);
            function TbParameterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbParameterForm.init) {
                    TbParameterForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TbParameterForm, [
                        'Kode', w0,
                        'Deskripsi', w0,
                        'Value', w0
                    ]);
                }
                return _this;
            }
            TbParameterForm.formKey = 'Rukuntangga.TbParameter';
            return TbParameterForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbParameterForm = TbParameterForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbParameterRow;
        (function (TbParameterRow) {
            TbParameterRow.idProperty = 'Id';
            TbParameterRow.nameProperty = 'Kode';
            TbParameterRow.localTextPrefix = 'Rukuntangga.TbParameter';
            TbParameterRow.deletePermission = 'Security:Parameter';
            TbParameterRow.insertPermission = 'Security:Parameter';
            TbParameterRow.readPermission = 'Security:Parameter';
            TbParameterRow.updatePermission = 'Security:Parameter';
        })(TbParameterRow = Rukuntangga.TbParameterRow || (Rukuntangga.TbParameterRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbParameterService;
        (function (TbParameterService) {
            TbParameterService.baseUrl = 'Rukuntangga/TbParameter';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbParameterService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbParameterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbParameterService = Rukuntangga.TbParameterService || (Rukuntangga.TbParameterService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPemiluForm = /** @class */ (function (_super) {
            __extends(TbPemiluForm, _super);
            function TbPemiluForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbPemiluForm.init) {
                    TbPemiluForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = Rukuntangga.TbDetailPemiluEditor;
                    Q.initFormType(TbPemiluForm, [
                        'Judul', w0,
                        'FileName', w1,
                        'tbDetailPemiluRow', w2
                    ]);
                }
                return _this;
            }
            TbPemiluForm.formKey = 'Rukuntangga.TbPemilu';
            return TbPemiluForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbPemiluForm = TbPemiluForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPemiluRow;
        (function (TbPemiluRow) {
            TbPemiluRow.idProperty = 'Id';
            TbPemiluRow.nameProperty = 'Judul';
            TbPemiluRow.localTextPrefix = 'Rukuntangga.TbPemilu';
            TbPemiluRow.deletePermission = 'Questioner:Pemilu:Delete';
            TbPemiluRow.insertPermission = 'Questioner:Pemilu:Insert';
            TbPemiluRow.readPermission = 'Questioner:Pemilu:View';
            TbPemiluRow.updatePermission = 'Questioner:Pemilu:Modify';
        })(TbPemiluRow = Rukuntangga.TbPemiluRow || (Rukuntangga.TbPemiluRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPemiluService;
        (function (TbPemiluService) {
            TbPemiluService.baseUrl = 'Rukuntangga/TbPemilu';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbPemiluService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbPemiluService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbPemiluService = Rukuntangga.TbPemiluService || (Rukuntangga.TbPemiluService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPhotoKtpForm = /** @class */ (function (_super) {
            __extends(TbPhotoKtpForm, _super);
            function TbPhotoKtpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbPhotoKtpForm.init) {
                    TbPhotoKtpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(TbPhotoKtpForm, [
                        'NamaFile', w0,
                        'DibuatOleh', w0,
                        'DibuatTanggal', w1,
                        'DieditOleh', w0,
                        'DieditTanggal', w1,
                        'SystemStatus', w2
                    ]);
                }
                return _this;
            }
            TbPhotoKtpForm.formKey = 'Rukuntangga.TbPhotoKtp';
            return TbPhotoKtpForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbPhotoKtpForm = TbPhotoKtpForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPhotoKtpRow;
        (function (TbPhotoKtpRow) {
            TbPhotoKtpRow.idProperty = 'Id';
            TbPhotoKtpRow.nameProperty = 'NamaFile';
            TbPhotoKtpRow.localTextPrefix = 'Rukuntangga.TbPhotoKtp';
            TbPhotoKtpRow.deletePermission = 'Administration:General';
            TbPhotoKtpRow.insertPermission = 'Administration:General';
            TbPhotoKtpRow.readPermission = 'Administration:General';
            TbPhotoKtpRow.updatePermission = 'Administration:General';
        })(TbPhotoKtpRow = Rukuntangga.TbPhotoKtpRow || (Rukuntangga.TbPhotoKtpRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPhotoKtpService;
        (function (TbPhotoKtpService) {
            TbPhotoKtpService.baseUrl = 'Rukuntangga/TbPhotoKtp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbPhotoKtpService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbPhotoKtpService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbPhotoKtpService = Rukuntangga.TbPhotoKtpService || (Rukuntangga.TbPhotoKtpService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPollingPemiluForm = /** @class */ (function (_super) {
            __extends(TbPollingPemiluForm, _super);
            function TbPollingPemiluForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbPollingPemiluForm.init) {
                    TbPollingPemiluForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    Q.initFormType(TbPollingPemiluForm, [
                        'Nik', w0
                    ]);
                }
                return _this;
            }
            TbPollingPemiluForm.formKey = 'Rukuntangga.TbPollingPemilu';
            return TbPollingPemiluForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbPollingPemiluForm = TbPollingPemiluForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPollingPemiluRow;
        (function (TbPollingPemiluRow) {
            TbPollingPemiluRow.idProperty = 'Id';
            TbPollingPemiluRow.nameProperty = 'Nik';
            TbPollingPemiluRow.localTextPrefix = 'Rukuntangga.TbPollingPemilu';
            TbPollingPemiluRow.deletePermission = 'Questioner:Pemilu:Delete';
            TbPollingPemiluRow.insertPermission = 'Questioner:Pemilu:Insert';
            TbPollingPemiluRow.readPermission = 'Questioner:Pemilu:View';
            TbPollingPemiluRow.updatePermission = 'Questioner:Pemilu:Modify';
        })(TbPollingPemiluRow = Rukuntangga.TbPollingPemiluRow || (Rukuntangga.TbPollingPemiluRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPollingPemiluService;
        (function (TbPollingPemiluService) {
            TbPollingPemiluService.baseUrl = 'Rukuntangga/TbPollingPemilu';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbPollingPemiluService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbPollingPemiluService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbPollingPemiluService = Rukuntangga.TbPollingPemiluService || (Rukuntangga.TbPollingPemiluService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbProvinsiForm = /** @class */ (function (_super) {
            __extends(TbProvinsiForm, _super);
            function TbProvinsiForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbProvinsiForm.init) {
                    TbProvinsiForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TbProvinsiForm, [
                        'KodeProvinsi', w0,
                        'NamaProvinsi', w0
                    ]);
                }
                return _this;
            }
            TbProvinsiForm.formKey = 'Rukuntangga.TbProvinsi';
            return TbProvinsiForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbProvinsiForm = TbProvinsiForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbProvinsiRow;
        (function (TbProvinsiRow) {
            TbProvinsiRow.idProperty = 'Id';
            TbProvinsiRow.nameProperty = 'KodeProvinsi';
            TbProvinsiRow.localTextPrefix = 'Rukuntangga.TbProvinsi';
            TbProvinsiRow.lookupKey = 'Rukuntangga.Provinsi';
            function getLookup() {
                return Q.getLookup('Rukuntangga.Provinsi');
            }
            TbProvinsiRow.getLookup = getLookup;
            TbProvinsiRow.deletePermission = 'Master:Provinsi:Delete';
            TbProvinsiRow.insertPermission = 'Master:Provinsi:Insert';
            TbProvinsiRow.readPermission = 'Master:Provinsi:View';
            TbProvinsiRow.updatePermission = 'Master:Provinsi:Modify';
        })(TbProvinsiRow = Rukuntangga.TbProvinsiRow || (Rukuntangga.TbProvinsiRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbProvinsiService;
        (function (TbProvinsiService) {
            TbProvinsiService.baseUrl = 'Rukuntangga/TbProvinsi';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbProvinsiService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbProvinsiService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbProvinsiService = Rukuntangga.TbProvinsiService || (Rukuntangga.TbProvinsiService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbRtForm = /** @class */ (function (_super) {
            __extends(TbRtForm, _super);
            function TbRtForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbRtForm.init) {
                    TbRtForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = AbidzarFrm.Common.Editor.Sequens3Editor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(TbRtForm, [
                        'IdRw', w0,
                        'IdRwKodeRw', w1,
                        'KodeRt', w1,
                        'NoRt', w2,
                        'KodeLogin', w1,
                        'Nik', w1,
                        'NamaRt', w1,
                        'Photo', w3,
                        'Deskripsi', w4,
                        'Quotes', w4,
                        'Visi', w4,
                        'Misi', w4,
                        'Facebook', w1,
                        'Twitter', w1,
                        'Instagram', w1,
                        'Whatsapp', w1
                    ]);
                }
                return _this;
            }
            TbRtForm.formKey = 'Rukuntangga.TbRt';
            return TbRtForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbRtForm = TbRtForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbRtRow;
        (function (TbRtRow) {
            TbRtRow.idProperty = 'Id';
            TbRtRow.nameProperty = 'KodeRt';
            TbRtRow.localTextPrefix = 'Rukuntangga.TbRt';
            TbRtRow.deletePermission = 'Master:Rt:Delete';
            TbRtRow.insertPermission = 'Master:Rt:Insert';
            TbRtRow.readPermission = 'Master:Rt:View';
            TbRtRow.updatePermission = 'Master:Rt:Modify';
        })(TbRtRow = Rukuntangga.TbRtRow || (Rukuntangga.TbRtRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbRtService;
        (function (TbRtService) {
            TbRtService.baseUrl = 'Rukuntangga/TbRt';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbRtService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbRtService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbRtService = Rukuntangga.TbRtService || (Rukuntangga.TbRtService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbRwForm = /** @class */ (function (_super) {
            __extends(TbRwForm, _super);
            function TbRwForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbRwForm.init) {
                    TbRwForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = AbidzarFrm.Common.Editor.Sequens3Editor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(TbRwForm, [
                        'IdProvinsi', w0,
                        'IdKota', w0,
                        'IdKecamatan', w0,
                        'IdKelurahan', w0,
                        'KodeRw', w1,
                        'NoRw', w2,
                        'Nik', w1,
                        'NamaRw', w1,
                        'Photo', w3,
                        'Deskripsi', w4,
                        'Quotes', w4,
                        'Visi', w4,
                        'Misi', w4,
                        'Facebook', w1,
                        'Twitter', w1,
                        'Instagram', w1,
                        'Whatsapp', w1,
                        'Header', w4,
                        'Footer', w4
                    ]);
                }
                return _this;
            }
            TbRwForm.formKey = 'Rukuntangga.TbRw';
            return TbRwForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbRwForm = TbRwForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbRwRow;
        (function (TbRwRow) {
            TbRwRow.idProperty = 'Id';
            TbRwRow.nameProperty = 'KodeRw';
            TbRwRow.localTextPrefix = 'Rukuntangga.TbRw';
            TbRwRow.lookupKey = 'Rukuntangga.Rw';
            function getLookup() {
                return Q.getLookup('Rukuntangga.Rw');
            }
            TbRwRow.getLookup = getLookup;
            TbRwRow.deletePermission = 'Master:Rw:Delete';
            TbRwRow.insertPermission = 'Master:Rw:Insert';
            TbRwRow.readPermission = 'Master:Rw:View';
            TbRwRow.updatePermission = 'Master:Rw:Modify';
        })(TbRwRow = Rukuntangga.TbRwRow || (Rukuntangga.TbRwRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbRwService;
        (function (TbRwService) {
            TbRwService.baseUrl = 'Rukuntangga/TbRw';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbRwService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbRwService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbRwService = Rukuntangga.TbRwService || (Rukuntangga.TbRwService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbSlideShowForm = /** @class */ (function (_super) {
            __extends(TbSlideShowForm, _super);
            function TbSlideShowForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbSlideShowForm.init) {
                    TbSlideShowForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = AbidzarFrm.Common.Editor.TypeSlideshowEditor;
                    var w4 = AbidzarFrm.Common.Editor.TypePosisiIklanEditor;
                    Q.initFormType(TbSlideShowForm, [
                        'Judul', w0,
                        'Deskripsi', w1,
                        'FileName', w2,
                        'Tipe', w3,
                        'Posisi', w4,
                        'PathUrl', w0,
                        'KodeRt', w0
                    ]);
                }
                return _this;
            }
            TbSlideShowForm.formKey = 'Rukuntangga.TbSlideShow';
            return TbSlideShowForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbSlideShowForm = TbSlideShowForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbSlideShowRow;
        (function (TbSlideShowRow) {
            TbSlideShowRow.idProperty = 'Id';
            TbSlideShowRow.nameProperty = 'Judul';
            TbSlideShowRow.localTextPrefix = 'Rukuntangga.TbSlideShow';
            TbSlideShowRow.deletePermission = 'Master:Slidesho:Delete';
            TbSlideShowRow.insertPermission = 'Master:Slideshow:Insert';
            TbSlideShowRow.readPermission = 'Master:Slideshow:View';
            TbSlideShowRow.updatePermission = 'Master:Slideshow:Modify';
        })(TbSlideShowRow = Rukuntangga.TbSlideShowRow || (Rukuntangga.TbSlideShowRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbSlideShowService;
        (function (TbSlideShowService) {
            TbSlideShowService.baseUrl = 'Rukuntangga/TbSlideShow';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbSlideShowService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbSlideShowService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbSlideShowService = Rukuntangga.TbSlideShowService || (Rukuntangga.TbSlideShowService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbStrukturForm = /** @class */ (function (_super) {
            __extends(TbStrukturForm, _super);
            function TbStrukturForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbStrukturForm.init) {
                    TbStrukturForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = AbidzarFrm.Common.Editor.JabatanEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TbStrukturForm, [
                        'IdKtp', w0,
                        'IdJabatan', w1,
                        'AwalPeriode', w2,
                        'AkhirPeriode', w2
                    ]);
                }
                return _this;
            }
            TbStrukturForm.formKey = 'Rukuntangga.TbStruktur';
            return TbStrukturForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbStrukturForm = TbStrukturForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbStrukturRow;
        (function (TbStrukturRow) {
            TbStrukturRow.idProperty = 'Id';
            TbStrukturRow.nameProperty = 'IdKtp';
            TbStrukturRow.localTextPrefix = 'Rukuntangga.TbStruktur';
            TbStrukturRow.deletePermission = 'Master:Struktur:Delete';
            TbStrukturRow.insertPermission = 'Master:Struktur:Insert';
            TbStrukturRow.readPermission = 'Master:Struktur:View';
            TbStrukturRow.updatePermission = 'Master:Struktur:Modify';
        })(TbStrukturRow = Rukuntangga.TbStrukturRow || (Rukuntangga.TbStrukturRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbStrukturService;
        (function (TbStrukturService) {
            TbStrukturService.baseUrl = 'Rukuntangga/TbStruktur';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbStrukturService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbStrukturService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbStrukturService = Rukuntangga.TbStrukturService || (Rukuntangga.TbStrukturService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTanyaRtDetailForm = /** @class */ (function (_super) {
            __extends(TbTanyaRtDetailForm, _super);
            function TbTanyaRtDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbTanyaRtDetailForm.init) {
                    TbTanyaRtDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(TbTanyaRtDetailForm, [
                        'IdTanyaRt', w0,
                        'Deskripsi', w1
                    ]);
                }
                return _this;
            }
            TbTanyaRtDetailForm.formKey = 'Rukuntangga.TbTanyaRtDetail';
            return TbTanyaRtDetailForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbTanyaRtDetailForm = TbTanyaRtDetailForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTanyaRtDetailRow;
        (function (TbTanyaRtDetailRow) {
            TbTanyaRtDetailRow.idProperty = 'Id';
            TbTanyaRtDetailRow.nameProperty = 'Deskripsi';
            TbTanyaRtDetailRow.localTextPrefix = 'Rukuntangga.TbTanyaRtDetail';
            TbTanyaRtDetailRow.deletePermission = 'Master:TanyaRt:Delete';
            TbTanyaRtDetailRow.insertPermission = 'Master:TanyaRt:Insert';
            TbTanyaRtDetailRow.readPermission = 'Master:TanyaRt:View';
            TbTanyaRtDetailRow.updatePermission = 'Master:TanyaRt:Modify';
        })(TbTanyaRtDetailRow = Rukuntangga.TbTanyaRtDetailRow || (Rukuntangga.TbTanyaRtDetailRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTanyaRtDetailService;
        (function (TbTanyaRtDetailService) {
            TbTanyaRtDetailService.baseUrl = 'Rukuntangga/TbTanyaRtDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbTanyaRtDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbTanyaRtDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbTanyaRtDetailService = Rukuntangga.TbTanyaRtDetailService || (Rukuntangga.TbTanyaRtDetailService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTanyaRtForm = /** @class */ (function (_super) {
            __extends(TbTanyaRtForm, _super);
            function TbTanyaRtForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbTanyaRtForm.init) {
                    TbTanyaRtForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TbTanyaRtForm, [
                        'Judul', w0
                    ]);
                }
                return _this;
            }
            TbTanyaRtForm.formKey = 'Rukuntangga.TbTanyaRt';
            return TbTanyaRtForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbTanyaRtForm = TbTanyaRtForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTanyaRtRow;
        (function (TbTanyaRtRow) {
            TbTanyaRtRow.idProperty = 'Id';
            TbTanyaRtRow.nameProperty = 'Judul';
            TbTanyaRtRow.localTextPrefix = 'Rukuntangga.TbTanyaRt';
            TbTanyaRtRow.deletePermission = 'Master:TanyaRt:Delete';
            TbTanyaRtRow.insertPermission = 'Master:TanyaRt:Insert';
            TbTanyaRtRow.readPermission = 'Master:TanyaRt:View';
            TbTanyaRtRow.updatePermission = 'Master:TanyaRt:Modify';
        })(TbTanyaRtRow = Rukuntangga.TbTanyaRtRow || (Rukuntangga.TbTanyaRtRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTanyaRtService;
        (function (TbTanyaRtService) {
            TbTanyaRtService.baseUrl = 'Rukuntangga/TbTanyaRt';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbTanyaRtService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbTanyaRtService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbTanyaRtService = Rukuntangga.TbTanyaRtService || (Rukuntangga.TbTanyaRtService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTestimoniForm = /** @class */ (function (_super) {
            __extends(TbTestimoniForm, _super);
            function TbTestimoniForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbTestimoniForm.init) {
                    TbTestimoniForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(TbTestimoniForm, [
                        'Nik', w0,
                        'Deskripsi', w1
                    ]);
                }
                return _this;
            }
            TbTestimoniForm.formKey = 'Rukuntangga.TbTestimoni';
            return TbTestimoniForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbTestimoniForm = TbTestimoniForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTestimoniRow;
        (function (TbTestimoniRow) {
            TbTestimoniRow.idProperty = 'Id';
            TbTestimoniRow.nameProperty = 'Nik';
            TbTestimoniRow.localTextPrefix = 'Rukuntangga.TbTestimoni';
            TbTestimoniRow.deletePermission = 'Master:Testimoni:Delete';
            TbTestimoniRow.insertPermission = 'Master:Testimoni:Insert';
            TbTestimoniRow.readPermission = 'Master:Testimoni:View';
            TbTestimoniRow.updatePermission = 'Master:Testimoni:Modify';
        })(TbTestimoniRow = Rukuntangga.TbTestimoniRow || (Rukuntangga.TbTestimoniRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTestimoniService;
        (function (TbTestimoniService) {
            TbTestimoniService.baseUrl = 'Rukuntangga/TbTestimoni';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbTestimoniService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbTestimoniService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbTestimoniService = Rukuntangga.TbTestimoniService || (Rukuntangga.TbTestimoniService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionDocumentCodeForm = /** @class */ (function (_super) {
            __extends(TbTransactionDocumentCodeForm, _super);
            function TbTransactionDocumentCodeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbTransactionDocumentCodeForm.init) {
                    TbTransactionDocumentCodeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TbTransactionDocumentCodeForm, [
                        'DocumentCode', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            TbTransactionDocumentCodeForm.formKey = 'Rukuntangga.TbTransactionDocumentCode';
            return TbTransactionDocumentCodeForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbTransactionDocumentCodeForm = TbTransactionDocumentCodeForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionDocumentCodeRow;
        (function (TbTransactionDocumentCodeRow) {
            TbTransactionDocumentCodeRow.idProperty = 'Id';
            TbTransactionDocumentCodeRow.nameProperty = 'DocumentCode';
            TbTransactionDocumentCodeRow.localTextPrefix = 'Rukuntangga.TbTransactionDocumentCode';
            TbTransactionDocumentCodeRow.lookupKey = 'Rukuntangga.TransactionDocumentCode';
            function getLookup() {
                return Q.getLookup('Rukuntangga.TransactionDocumentCode');
            }
            TbTransactionDocumentCodeRow.getLookup = getLookup;
            TbTransactionDocumentCodeRow.deletePermission = 'Security:DocumentCode';
            TbTransactionDocumentCodeRow.insertPermission = 'Security:DocumentCode';
            TbTransactionDocumentCodeRow.readPermission = 'Security:DocumentCode';
            TbTransactionDocumentCodeRow.updatePermission = 'Security:DocumentCode';
        })(TbTransactionDocumentCodeRow = Rukuntangga.TbTransactionDocumentCodeRow || (Rukuntangga.TbTransactionDocumentCodeRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionDocumentCodeService;
        (function (TbTransactionDocumentCodeService) {
            TbTransactionDocumentCodeService.baseUrl = 'Rukuntangga/TbTransactionDocumentCode';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbTransactionDocumentCodeService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbTransactionDocumentCodeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbTransactionDocumentCodeService = Rukuntangga.TbTransactionDocumentCodeService || (Rukuntangga.TbTransactionDocumentCodeService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionFlowDetailForm = /** @class */ (function (_super) {
            __extends(TbTransactionFlowDetailForm, _super);
            function TbTransactionFlowDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbTransactionFlowDetailForm.init) {
                    TbTransactionFlowDetailForm.init = true;
                    var s = Serenity;
                    var w0 = AbidzarFrm.Common.Editor.TransactionStatusEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = AbidzarFrm.Common.Editor.AdministrationRoleEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = AbidzarFrm.Common.Editor.SendEmailTypeEditor;
                    var w6 = AbidzarFrm.Common.Editor.EmailTemplateEditor;
                    Q.initFormType(TbTransactionFlowDetailForm, [
                        'TransactionStatusCode', w0,
                        'Name', w1,
                        'StartStatus', w2,
                        'FinalStatus', w2,
                        'AccessButton', w3,
                        'NextStatus', w0,
                        'PopupMessage', w4,
                        'IsSendEmail', w2,
                        'SendEmailType', w5,
                        'SendEmailTo', w4,
                        'TemplateEmailType', w6,
                        'CcCreator', w2,
                        'CcRequestor', w2
                    ]);
                }
                return _this;
            }
            TbTransactionFlowDetailForm.formKey = 'Rukuntangga.TbTransactionFlowDetail';
            return TbTransactionFlowDetailForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbTransactionFlowDetailForm = TbTransactionFlowDetailForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionFlowDetailRow;
        (function (TbTransactionFlowDetailRow) {
            TbTransactionFlowDetailRow.idProperty = 'Id';
            TbTransactionFlowDetailRow.nameProperty = 'TransactionStatusCode';
            TbTransactionFlowDetailRow.localTextPrefix = 'Rukuntangga.TbTransactionFlowDetail';
            TbTransactionFlowDetailRow.deletePermission = 'Security:Flow';
            TbTransactionFlowDetailRow.insertPermission = 'Security:Flow';
            TbTransactionFlowDetailRow.readPermission = 'Security:Flow';
            TbTransactionFlowDetailRow.updatePermission = 'Security:Flow';
        })(TbTransactionFlowDetailRow = Rukuntangga.TbTransactionFlowDetailRow || (Rukuntangga.TbTransactionFlowDetailRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionFlowDetailService;
        (function (TbTransactionFlowDetailService) {
            TbTransactionFlowDetailService.baseUrl = 'Rukuntangga/TbTransactionFlowDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbTransactionFlowDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbTransactionFlowDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbTransactionFlowDetailService = Rukuntangga.TbTransactionFlowDetailService || (Rukuntangga.TbTransactionFlowDetailService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionFlowForm = /** @class */ (function (_super) {
            __extends(TbTransactionFlowForm, _super);
            function TbTransactionFlowForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbTransactionFlowForm.init) {
                    TbTransactionFlowForm.init = true;
                    var s = Serenity;
                    var w0 = AbidzarFrm.Common.Editor.TransactionDocumentCodeEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = Rukuntangga.TbTransactionFlowDetailEditor;
                    Q.initFormType(TbTransactionFlowForm, [
                        'DocumentCode', w0,
                        'Code', w1,
                        'Description', w1,
                        'IsActive', w2,
                        'tbTransactionFlowDetailRow', w3
                    ]);
                }
                return _this;
            }
            TbTransactionFlowForm.formKey = 'Rukuntangga.TbTransactionFlow';
            return TbTransactionFlowForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbTransactionFlowForm = TbTransactionFlowForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionFlowRow;
        (function (TbTransactionFlowRow) {
            TbTransactionFlowRow.idProperty = 'Id';
            TbTransactionFlowRow.nameProperty = 'DocumentCode';
            TbTransactionFlowRow.localTextPrefix = 'Rukuntangga.TbTransactionFlow';
            TbTransactionFlowRow.deletePermission = 'Security:Flow';
            TbTransactionFlowRow.insertPermission = 'Security:Flow';
            TbTransactionFlowRow.readPermission = 'Security:Flow';
            TbTransactionFlowRow.updatePermission = 'Security:Flow';
        })(TbTransactionFlowRow = Rukuntangga.TbTransactionFlowRow || (Rukuntangga.TbTransactionFlowRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionFlowService;
        (function (TbTransactionFlowService) {
            TbTransactionFlowService.baseUrl = 'Rukuntangga/TbTransactionFlow';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbTransactionFlowService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbTransactionFlowService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbTransactionFlowService = Rukuntangga.TbTransactionFlowService || (Rukuntangga.TbTransactionFlowService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionStatusForm = /** @class */ (function (_super) {
            __extends(TbTransactionStatusForm, _super);
            function TbTransactionStatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbTransactionStatusForm.init) {
                    TbTransactionStatusForm.init = true;
                    var s = Serenity;
                    var w0 = AbidzarFrm.Common.Editor.TransactionDocumentCodeEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(TbTransactionStatusForm, [
                        'DocumentCode', w0,
                        'Code', w1,
                        'Internal', w1,
                        'External', w1
                    ]);
                }
                return _this;
            }
            TbTransactionStatusForm.formKey = 'Rukuntangga.TbTransactionStatus';
            return TbTransactionStatusForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbTransactionStatusForm = TbTransactionStatusForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionStatusRow;
        (function (TbTransactionStatusRow) {
            TbTransactionStatusRow.idProperty = 'Id';
            TbTransactionStatusRow.nameProperty = 'DocumentCode';
            TbTransactionStatusRow.localTextPrefix = 'Rukuntangga.TbTransactionStatus';
            TbTransactionStatusRow.lookupKey = 'Rukuntangga.TransactionStatus';
            function getLookup() {
                return Q.getLookup('Rukuntangga.TransactionStatus');
            }
            TbTransactionStatusRow.getLookup = getLookup;
            TbTransactionStatusRow.deletePermission = 'Security:TransactionStatus';
            TbTransactionStatusRow.insertPermission = 'Security:TransactionStatus';
            TbTransactionStatusRow.readPermission = 'Security:TransactionStatus';
            TbTransactionStatusRow.updatePermission = 'Security:TransactionStatus';
        })(TbTransactionStatusRow = Rukuntangga.TbTransactionStatusRow || (Rukuntangga.TbTransactionStatusRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionStatusService;
        (function (TbTransactionStatusService) {
            TbTransactionStatusService.baseUrl = 'Rukuntangga/TbTransactionStatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbTransactionStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbTransactionStatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbTransactionStatusService = Rukuntangga.TbTransactionStatusService || (Rukuntangga.TbTransactionStatusService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbUserApiForm = /** @class */ (function (_super) {
            __extends(TbUserApiForm, _super);
            function TbUserApiForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbUserApiForm.init) {
                    TbUserApiForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TbUserApiForm, [
                        'NamaApi', w0,
                        'IdUser', w0,
                        'Sandi', w0,
                        'Status', w1,
                        'DibuatOleh', w0,
                        'DibuatTanggal', w2,
                        'DieditOleh', w0,
                        'DieditTanggal', w2,
                        'SystemStatus', w1
                    ]);
                }
                return _this;
            }
            TbUserApiForm.formKey = 'Rukuntangga.TbUserApi';
            return TbUserApiForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbUserApiForm = TbUserApiForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbUserApiRow;
        (function (TbUserApiRow) {
            TbUserApiRow.idProperty = 'Id';
            TbUserApiRow.nameProperty = 'NamaApi';
            TbUserApiRow.localTextPrefix = 'Rukuntangga.TbUserApi';
            TbUserApiRow.deletePermission = 'Security:UserApi';
            TbUserApiRow.insertPermission = 'Security:UserApi';
            TbUserApiRow.readPermission = 'Security:UserApi';
            TbUserApiRow.updatePermission = 'Security:UserApi';
        })(TbUserApiRow = Rukuntangga.TbUserApiRow || (Rukuntangga.TbUserApiRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbUserApiService;
        (function (TbUserApiService) {
            TbUserApiService.baseUrl = 'Rukuntangga/TbUserApi';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbUserApiService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbUserApiService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbUserApiService = Rukuntangga.TbUserApiService || (Rukuntangga.TbUserApiService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbUserForm = /** @class */ (function (_super) {
            __extends(TbUserForm, _super);
            function TbUserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbUserForm.init) {
                    TbUserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TbUserForm, [
                        'Nik', w0,
                        'Sandi', w0,
                        'Email', w0,
                        'Status', w1,
                        'KodeVerifikasi', w0,
                        'IsMobile', w1,
                        'IdRole', w0,
                        'DibuatOleh', w0,
                        'DibuatTanggal', w2,
                        'DieditOleh', w0,
                        'DieditTanggal', w2,
                        'SystemStatus', w1
                    ]);
                }
                return _this;
            }
            TbUserForm.formKey = 'Rukuntangga.TbUser';
            return TbUserForm;
        }(Serenity.PrefixedContext));
        Rukuntangga.TbUserForm = TbUserForm;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbUserRow;
        (function (TbUserRow) {
            TbUserRow.idProperty = 'Id';
            TbUserRow.nameProperty = 'Nik';
            TbUserRow.localTextPrefix = 'Rukuntangga.TbUser';
            TbUserRow.deletePermission = 'Security:User';
            TbUserRow.insertPermission = 'Security:User';
            TbUserRow.readPermission = 'Security:User';
            TbUserRow.updatePermission = 'Security:User';
        })(TbUserRow = Rukuntangga.TbUserRow || (Rukuntangga.TbUserRow = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbUserService;
        (function (TbUserService) {
            TbUserService.baseUrl = 'Rukuntangga/TbUser';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbUserService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbUserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbUserService = Rukuntangga.TbUserService || (Rukuntangga.TbUserService = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Texts;
    (function (Texts) {
        AbidzarFrm['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, KtpId: 1, KtpKodeRt: 1, LastDirectoryUpdate: 1, Nik: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, RoleName: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Northwind: { Category: { CategoryID: 1, CategoryName: 1, Description: 1, Picture: 1 }, CategoryLang: { CategoryId: 1, CategoryName: 1, Description: 1, Id: 1, LanguageId: 1 }, Customer: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, CustomerID: 1, Email: 1, Fax: 1, ID: 1, LastContactDate: 1, LastContactedBy: 1, NoteList: 1, Phone: 1, PostalCode: 1, Region: 1, Representatives: 1, SendBulletin: 1 }, CustomerCustomerDemo: { CustomerAddress: 1, CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerRegion: 1, CustomerTypeCustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDemographic: { CustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDetails: { Email: 1, Id: 1, LastContactDate: 1, LastContactedBy: 1, LastContactedByAddress: 1, LastContactedByBirthDate: 1, LastContactedByCity: 1, LastContactedByCountry: 1, LastContactedByExtension: 1, LastContactedByFirstName: 1, LastContactedByHireDate: 1, LastContactedByHomePhone: 1, LastContactedByLastName: 1, LastContactedByNotes: 1, LastContactedByPhoto: 1, LastContactedByPhotoPath: 1, LastContactedByPostalCode: 1, LastContactedByRegion: 1, LastContactedByReportsTo: 1, LastContactedByTitle: 1, LastContactedByTitleOfCourtesy: 1, SendBulletin: 1 }, CustomerGrossSales: { ContactName: 1, CustomerId: 1, GrossAmount: 1, ProductId: 1, ProductName: 1 }, CustomerRepresentatives: { CustomerId: 1, EmployeeId: 1, RepresentativeId: 1 }, DragDropSample: { Id: 1, ParentId: 1, Title: 1 }, Employee: { Address: 1, BirthDate: 1, City: 1, Country: 1, EmployeeID: 1, Extension: 1, FirstName: 1, FullName: 1, Gender: 1, HireDate: 1, HomePhone: 1, LastName: 1, Notes: 1, Photo: 1, PhotoPath: 1, PostalCode: 1, Region: 1, ReportsTo: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToFullName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToReportsTo: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, Title: 1, TitleOfCourtesy: 1 }, EmployeeTerritory: { EmployeeAddress: 1, EmployeeBirthDate: 1, EmployeeCity: 1, EmployeeCountry: 1, EmployeeExtension: 1, EmployeeFirstName: 1, EmployeeHireDate: 1, EmployeeHomePhone: 1, EmployeeID: 1, EmployeeLastName: 1, EmployeeNotes: 1, EmployeePhoto: 1, EmployeePhotoPath: 1, EmployeePostalCode: 1, EmployeeRegion: 1, EmployeeReportsTo: 1, EmployeeTitle: 1, EmployeeTitleOfCourtesy: 1, TerritoryID: 1, TerritoryRegionID: 1, TerritoryTerritoryDescription: 1 }, Note: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserDisplayName: 1, InsertUserId: 1, NoteId: 1, Text: 1 }, Order: { CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerRegion: 1, DetailList: 1, EmployeeFullName: 1, EmployeeGender: 1, EmployeeID: 1, EmployeeReportsToFullName: 1, Freight: 1, OrderDate: 1, OrderID: 1, RequiredDate: 1, ShipAddress: 1, ShipCity: 1, ShipCountry: 1, ShipName: 1, ShipPostalCode: 1, ShipRegion: 1, ShipVia: 1, ShipViaCompanyName: 1, ShipViaPhone: 1, ShippedDate: 1, ShippingState: 1 }, OrderDetail: { DetailID: 1, Discount: 1, LineTotal: 1, OrderCustomerID: 1, OrderDate: 1, OrderEmployeeID: 1, OrderID: 1, OrderShipCity: 1, OrderShipCountry: 1, OrderShipVia: 1, OrderShippedDate: 1, ProductDiscontinued: 1, ProductID: 1, ProductName: 1, ProductQuantityPerUnit: 1, ProductSupplierID: 1, ProductUnitPrice: 1, Quantity: 1, UnitPrice: 1 }, Product: { CategoryDescription: 1, CategoryID: 1, CategoryName: 1, CategoryPicture: 1, Discontinued: 1, ProductID: 1, ProductImage: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierAddress: 1, SupplierCity: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountry: 1, SupplierFax: 1, SupplierHomePage: 1, SupplierID: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierRegion: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1 }, ProductLang: { Id: 1, LanguageId: 1, ProductId: 1, ProductName: 1 }, ProductLog: { CategoryID: 1, ChangingUserId: 1, Discontinued: 1, OperationType: 1, ProductID: 1, ProductImage: 1, ProductLogID: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierID: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1, ValidFrom: 1, ValidUntil: 1 }, Region: { RegionDescription: 1, RegionID: 1 }, SalesByCategory: { CategoryId: 1, CategoryName: 1, ProductName: 1, ProductSales: 1 }, Shipper: { CompanyName: 1, Phone: 1, ShipperID: 1 }, Supplier: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, Fax: 1, HomePage: 1, Phone: 1, PostalCode: 1, Region: 1, SupplierID: 1 }, Territory: { ID: 1, RegionDescription: 1, RegionID: 1, TerritoryDescription: 1, TerritoryID: 1 } }, Rukuntangga: { AppointmentDiary: { AppointmentLength: 1, DateTimeScheduled: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, KodeRt: 1, SomeImportantKey: 1, StatusEnum: 1, SystemStatus: 1, Title: 1 }, TbAutentikasiToken: { Aplikasi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, SystemStatus: 1, Token: 1 }, TbBiodata: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Gelar: 1, Id: 1, Nik: 1, SystemStatus: 1, Tahun: 1 }, TbDetailJenisInformasi: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, IdJenisInformasi: 1, IdJenisInformasiDibuatOleh: 1, IdJenisInformasiDibuatTanggal: 1, IdJenisInformasiDieditOleh: 1, IdJenisInformasiDieditTanggal: 1, IdJenisInformasiJenisInformasi: 1, IdJenisInformasiKodeRt: 1, IdJenisInformasiSystemStatus: 1, IsLandingPage: 1, Judul: 1, LevelArea: 1, NamaFile: 1, SystemStatus: 1 }, TbDetailJenisKegiatan: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Dokumentasi: 1, Id: 1, IdJenisKegiatan: 1, IdJenisKegiatanDeskripsi: 1, IdJenisKegiatanDibuatOleh: 1, IdJenisKegiatanDibuatTanggal: 1, IdJenisKegiatanDieditOleh: 1, IdJenisKegiatanDieditTanggal: 1, IdJenisKegiatanJenisKegiatan: 1, IdJenisKegiatanKodeRt: 1, IdJenisKegiatanSystemStatus: 1, LevelArea: 1, Lokasi: 1, NamaFile: 1, NamaKegiatan: 1, SystemStatus: 1, TanggalKegiatan: 1, WarnaLatar: 1 }, TbDetailPemilu: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, FileName: 1, Id: 1, IdPemilu: 1, IdPemiluDibuatOleh: 1, IdPemiluDibuatTanggal: 1, IdPemiluDieditOleh: 1, IdPemiluDieditTanggal: 1, IdPemiluFileName: 1, IdPemiluJudul: 1, IdPemiluKodeRt: 1, IdPemiluSystemStatus: 1, Kandidat: 1, NoUrut: 1, SystemStatus: 1 }, TbDokumentasiDetailJenisKegiatan: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, IdDetailJenisKegiatan: 1, IdDetailJenisKegiatanDeskripsi: 1, IdDetailJenisKegiatanDibuatOleh: 1, IdDetailJenisKegiatanDibuatTanggal: 1, IdDetailJenisKegiatanDieditOleh: 1, IdDetailJenisKegiatanDieditTanggal: 1, IdDetailJenisKegiatanIdJenisKegiatan: 1, IdDetailJenisKegiatanLevelArea: 1, IdDetailJenisKegiatanLokasi: 1, IdDetailJenisKegiatanNamaKegiatan: 1, IdDetailJenisKegiatanSystemStatus: 1, IdDetailJenisKegiatanTanggalKegiatan: 1, IdDetailJenisKegiatanWarnaLatar: 1, NamaFile: 1, SystemStatus: 1 }, TbEmailTemplate: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, KodeTemplate: 1, Subject: 1, SystemStatus: 1, Template: 1 }, TbGalery: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, KodeRt: 1, LevelArea: 1, Photos: 1, Thumbnail: 1 }, TbHistoricalUserLogin: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, IsMobile: 1, Login: 1, Logout: 1, Nik: 1, SystemStatus: 1 }, TbJabatan: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, NamaJabatan: 1, SystemStatus: 1 }, TbJadwalSiskamlim: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, Nama: 1, Nik: 1, SystemStatus: 1, Tanggal: 1 }, TbJenisInformasi: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, JenisInformasi: 1, KodeRt: 1, SystemStatus: 1, tbDetailJenisInformasiRow: 1 }, TbJenisKegiatan: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, JenisKegiatan: 1, KodeRt: 1, SystemStatus: 1, tbDetailJenisKegiatanRow: 1 }, TbKecamatan: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, IdKota: 1, IdKotaDibuatOleh: 1, IdKotaDibuatTanggal: 1, IdKotaDieditOleh: 1, IdKotaDieditTanggal: 1, IdKotaIdProvinsi: 1, IdKotaKodeKota: 1, IdKotaNamaKota: 1, IdKotaSystemStatus: 1, KodeKecamatan: 1, NamaKecamatan: 1, SystemStatus: 1 }, TbKelurahan: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, IdKecamatan: 1, IdKecamatanDibuatOleh: 1, IdKecamatanDibuatTanggal: 1, IdKecamatanDieditOleh: 1, IdKecamatanDieditTanggal: 1, IdKecamatanIdKota: 1, IdKecamatanKodeKecamatan: 1, IdKecamatanNamaKecamatan: 1, IdKecamatanSystemStatus: 1, KodeKelurahan: 1, NamaKelurahan: 1, SystemStatus: 1 }, TbKota: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, IdProvinsi: 1, IdProvinsiDibuatOleh: 1, IdProvinsiDibuatTanggal: 1, IdProvinsiDieditOleh: 1, IdProvinsiDieditTanggal: 1, IdProvinsiKodeProvinsi: 1, IdProvinsiNamaProvinsi: 1, IdProvinsiSystemStatus: 1, KodeKota: 1, NamaKota: 1, SystemStatus: 1 }, TbKtp: { Agama: 1, Alamat: 1, AlamatTinggal: 1, Attachment: 1, DataStatus: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, GolonganDarah: 1, Id: 1, IdKecamatan: 1, IdKecamatanTinggal: 1, IdKelurahan: 1, IdKelurahanTinggal: 1, IdKota: 1, IdKotaTinggal: 1, IdProvinsi: 1, IdProvinsiTinggal: 1, JenisKelamin: 1, JenisPekerjaan: 1, Kewarganegaraan: 1, Kk: 1, KodePos: 1, KodeRt: 1, Nama: 1, NamaAyah: 1, NamaIbu: 1, Nik: 1, Pendidikan: 1, PhotoKtp: 1, PhotoRumah: 1, Rt: 1, RtTinggal: 1, Rw: 1, RwTinggal: 1, SignatureKtp: 1, StatusPerkawinan: 1, SystemStatus: 1, TanggalLahir: 1, TanggalPerkawinan: 1, TempatLahir: 1, TinggalSesuaiKtp: 1 }, TbLaporanKas: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, KodeRt: 1, SystemStatus: 1, Tanggal: 1, Tipe: 1, Total: 1 }, TbListOfValue: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Group: 1, Id: 1, Kode: 1, SystemStatus: 1, Value: 1 }, TbMailLog: { Body: 1, Cc: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, ErrorMessage: 1, From: 1, Id: 1, Status: 1, Subject: 1, To: 1 }, TbParameter: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, Kode: 1, SystemStatus: 1, Value: 1 }, TbPemilu: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, FileName: 1, Id: 1, Judul: 1, KodeRt: 1, SystemStatus: 1, tbDetailPemiluRow: 1 }, TbPhotoKtp: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, NamaFile: 1, SystemStatus: 1 }, TbPollingPemilu: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, IdDetailPemilu: 1, IdDetailPemiluDibuatOleh: 1, IdDetailPemiluDibuatTanggal: 1, IdDetailPemiluDieditOleh: 1, IdDetailPemiluDieditTanggal: 1, IdDetailPemiluFileName: 1, IdDetailPemiluIdPemilu: 1, IdDetailPemiluKandidat: 1, IdDetailPemiluNoUrut: 1, IdDetailPemiluSystemStatus: 1, Nik: 1, NikAgama: 1, NikAlamat: 1, NikAlamatTinggal: 1, NikDibuatOleh: 1, NikDibuatTanggal: 1, NikDieditOleh: 1, NikDieditTanggal: 1, NikGolonganDarah: 1, NikId: 1, NikIdKelurahan: 1, NikIdKelurahanTinggal: 1, NikIdPhotoKtp: 1, NikIdSignatureKtp: 1, NikJenisKelamin: 1, NikJenisPekerjaan: 1, NikKewarganegaraan: 1, NikKk: 1, NikKodePos: 1, NikKodeRt: 1, NikNama: 1, NikNamaAyah: 1, NikNamaIbu: 1, NikPendidikan: 1, NikRt: 1, NikRtTinggal: 1, NikRw: 1, NikRwTinggal: 1, NikStatusPerkawinan: 1, NikSystemStatus: 1, NikTanggalLahir: 1, NikTanggalPerkawinan: 1, NikTempatLahir: 1, SystemStatus: 1 }, TbProvinsi: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, KodeProvinsi: 1, NamaProvinsi: 1, SystemStatus: 1 }, TbRt: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Facebook: 1, Id: 1, IdRw: 1, IdRwKodeRw: 1, IdRwNamaRw: 1, Instagram: 1, KodeLogin: 1, KodeRt: 1, Misi: 1, NamaRt: 1, Nik: 1, NoRt: 1, Photo: 1, Quotes: 1, SystemStatus: 1, Twitter: 1, Visi: 1, Whatsapp: 1 }, TbRw: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Facebook: 1, Footer: 1, Header: 1, Id: 1, IdKecamatan: 1, IdKelurahan: 1, IdKota: 1, IdProvinsi: 1, Instagram: 1, KodeRw: 1, Misi: 1, NamaRw: 1, Nik: 1, NoRw: 1, Photo: 1, Quotes: 1, SystemStatus: 1, Twitter: 1, Visi: 1, Whatsapp: 1 }, TbSlideShow: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, FileName: 1, Id: 1, Judul: 1, KodeRt: 1, PathUrl: 1, Posisi: 1, SystemStatus: 1, Tipe: 1 }, TbStruktur: { AkhirPeriode: 1, AwalPeriode: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, IdJabatan: 1, IdJabatanDibuatOleh: 1, IdJabatanDibuatTanggal: 1, IdJabatanDieditOleh: 1, IdJabatanDieditTanggal: 1, IdJabatanNamaJabatan: 1, IdJabatanSystemStatus: 1, IdKtp: 1, SystemStatus: 1 }, TbTanyaRt: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, Judul: 1, KtpIdKtp: 1, KtpKodeRt: 1, KtpNama: 1, KtpPhotoKtp: 1, SystemStatus: 1, tbTanyaRtDetailRow: 1 }, TbTanyaRtDetail: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, IdTanyaRt: 1, IdTanyaRtDibuatOleh: 1, IdTanyaRtDibuatTanggal: 1, IdTanyaRtDieditOleh: 1, IdTanyaRtDieditTanggal: 1, IdTanyaRtJudul: 1, IdTanyaRtSystemStatus: 1, SystemStatus: 1 }, TbTestimoni: { Deskripsi: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, Nik: 1, SystemStatus: 1 }, TbTransactionDocumentCode: { Description: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, DocumentCode: 1, Id: 1 }, TbTransactionFlow: { Code: 1, Description: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, DocumentCode: 1, Id: 1, IsActive: 1, tbTransactionFlowDetailRow: 1 }, TbTransactionFlowDetail: { AccessButton: 1, CcCreator: 1, CcRequestor: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, FinalStatus: 1, Id: 1, IsSendEmail: 1, Name: 1, NextStatus: 1, PopupMessage: 1, SendEmailTo: 1, SendEmailType: 1, StartStatus: 1, TemplateEmailType: 1, TransactionFlowId: 1, TransactionStatusCode: 1 }, TbTransactionStatus: { Code: 1, DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, DocumentCode: 1, External: 1, Id: 1, Internal: 1 }, TbUser: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Email: 1, Id: 1, IdRole: 1, IsMobile: 1, KodeVerifikasi: 1, Nik: 1, Sandi: 1, Status: 1, SystemStatus: 1 }, TbUserApi: { DibuatOleh: 1, DibuatTanggal: 1, DieditOleh: 1, DieditTanggal: 1, Id: 1, IdUser: 1, NamaApi: 1, Sandi: 1, Status: 1, SystemStatus: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, NorthwindPhone: 1, NorthwindPhoneMultiple: 1, SavePrimaryKeyError: 1 } });
    })(Texts = AbidzarFrm.Texts || (AbidzarFrm.Texts = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
        function hasRoles(roleName) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || ud.Roles.indexOf(roleName) > -1;
        }
        Authorization.hasRoles = hasRoles;
    })(Authorization = AbidzarFrm.Authorization || (AbidzarFrm.Authorization = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = AbidzarFrm.Administration || (AbidzarFrm.Administration = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChartInDialog = /** @class */ (function (_super) {
            __extends(ChartInDialog, _super);
            function ChartInDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChartInDialog_1 = ChartInDialog;
            ChartInDialog.initializePage = function () {
                $(function () {
                    $('#LaunchDialogButton').click(function (e) {
                        (new ChartInDialog_1()).dialogOpen();
                    });
                });
            };
            ChartInDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                BasicSamples.BasicSamplesService.OrdersByShipper({}, function (response) {
                    _this.areaChart = new Morris.Area({
                        element: _this.idPrefix + 'Chart',
                        resize: true, parseTime: false,
                        data: response.Values,
                        xkey: 'Month',
                        ykeys: response.ShipperKeys, labels: response.ShipperLabels, hideHover: 'auto'
                    });
                });
            };
            ChartInDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                this.areaChart && this.areaChart.redraw();
            };
            ChartInDialog.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='~_Chart'></div>";
            };
            ChartInDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = 'Orders by Shipper';
                return opt;
            };
            var ChartInDialog_1;
            ChartInDialog = ChartInDialog_1 = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.resizable(),
                Serenity.Decorators.maximizable()
            ], ChartInDialog);
            return ChartInDialog;
        }(Serenity.TemplatedDialog));
        BasicSamples.ChartInDialog = ChartInDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ProductDialog = /** @class */ (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Northwind.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Northwind.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Northwind.ProductDialog = ProductDialog;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var CloneableEntityDialog = /** @class */ (function (_super) {
            __extends(CloneableEntityDialog, _super);
            function CloneableEntityDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CloneableEntityDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                this.cloneButton.toggle(this.isEditMode());
            };
            /**
             * Overriding this method is optional to customize cloned entity
             */
            CloneableEntityDialog.prototype.getCloningEntity = function () {
                var clone = _super.prototype.getCloningEntity.call(this);
                // add (Clone) suffix if it's not already added
                var suffix = ' (Clone)';
                if (!Q.endsWith(clone.ProductName || '', suffix)) {
                    clone.ProductName = (clone.ProductName || '') + suffix;
                }
                // it's better to clear image for this sample
                // otherwise we would have to create a temporary copy of it
                // and upload
                clone.ProductImage = null;
                // let's clear fields not logical to be cloned
                clone.UnitsInStock = 0;
                clone.UnitsOnOrder = 0;
                return clone;
            };
            CloneableEntityDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], CloneableEntityDialog);
            return CloneableEntityDialog;
        }(AbidzarFrm.Northwind.ProductDialog));
        BasicSamples.CloneableEntityDialog = CloneableEntityDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ProductGrid = /** @class */ (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ProductGrid.prototype.getDialogType = function () { return Northwind.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(AbidzarFrm.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.ProductService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(AbidzarFrm.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Product List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            ProductID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            ProductGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
            // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
            // custom widgets and validations are not possible, and as a bonus the code can become a mess.
            // 
            // This was just a sample how-to after much requests, and is not supported. 
            // This is all we can offer, please don't ask us to Guide you...
            /**
             * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
             * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
             * no event handlers to rendered cell contents
             */
            ProductGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ProductGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + column.field +
                    "' value='" + Q.attrEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            /**
             * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
             */
            ProductGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + Q.attrEncode(id) + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            ProductGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ProductGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                var category = Q.first(columns, function (x) { return x.field === "CategoryName" /* CategoryName */; });
                category.referencedFields = ["CategoryID" /* CategoryID */];
                category.format = function (ctx) { return _this.selectFormatter(ctx, "CategoryID" /* CategoryID */, Northwind.CategoryRow.getLookup()); };
                var supplier = Q.first(columns, function (x) { return x.field === "SupplierCompanyName" /* SupplierCompanyName */; });
                supplier.referencedFields = ["SupplierID" /* SupplierID */];
                supplier.format = function (ctx) { return _this.selectFormatter(ctx, "SupplierID" /* SupplierID */, Northwind.SupplierRow.getLookup()); };
                Q.first(columns, function (x) { return x.field === "UnitPrice" /* UnitPrice */; }).format = num;
                Q.first(columns, function (x) { return x.field === "UnitsInStock" /* UnitsInStock */; }).format = num;
                Q.first(columns, function (x) { return x.field === "UnitsOnOrder" /* UnitsOnOrder */; }).format = num;
                Q.first(columns, function (x) { return x.field === "ReorderLevel" /* ReorderLevel */; }).format = num;
                return columns;
            };
            ProductGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ProductID];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'UnitPrice') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.ProductID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            ProductGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ProductGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.ProductID = key;
                    Q.serviceRequest('Northwind/Product/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ProductGrid.prototype.getQuickFilters = function () {
                var flt = _super.prototype.getQuickFilters.call(this);
                var q = Q.parseQueryString();
                if (q["cat"]) {
                    var category = Q.tryFirst(flt, function (x) { return x.field == "CategoryID"; });
                    category.init = function (e) {
                        e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                    };
                }
                return flt;
            };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Northwind.ProductGrid = ProductGrid;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var CloneableEntityGrid = /** @class */ (function (_super) {
            __extends(CloneableEntityGrid, _super);
            function CloneableEntityGrid(container) {
                return _super.call(this, container) || this;
            }
            CloneableEntityGrid.prototype.getDialogType = function () { return BasicSamples.CloneableEntityDialog; };
            CloneableEntityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CloneableEntityGrid);
            return CloneableEntityGrid;
        }(AbidzarFrm.Northwind.ProductGrid));
        BasicSamples.CloneableEntityGrid = CloneableEntityGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var OrderGrid = /** @class */ (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderGrid.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            OrderGrid.prototype.getDialogType = function () { return Northwind.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderGrid.prototype.getQuickFilters = function () {
                var _this = this;
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Northwind.ProductRow.lookupKey
                    },
                    field: 'ProductID',
                    title: 'Contains Product in Details',
                    handler: function (w) {
                        _this.view.params.ProductID = Q.toId(w.value);
                    },
                    cssClass: 'hidden-xs'
                });
                return filters;
            };
            OrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, "ShippingState" /* ShippingState */);
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(AbidzarFrm.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(AbidzarFrm.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrderGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            OrderGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        AbidzarFrm.Common.ReportHelper.execute({
                            reportKey: 'Northwind.OrderDetail',
                            params: {
                                OrderID: item.OrderID
                            }
                        });
                    }
                }
            };
            OrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            OrderGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    CustomerID: eq ? eq.CustomerID : null
                });
            };
            OrderGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], OrderGrid);
            return OrderGrid;
        }(Serenity.EntityGrid));
        Northwind.OrderGrid = OrderGrid;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var DefaultValuesInNewGrid = /** @class */ (function (_super) {
            __extends(DefaultValuesInNewGrid, _super);
            function DefaultValuesInNewGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called when New Item button is clicked.
             * By default, it calls EditItem with an empty entity.
             * This is a good place to fill in default values for New Item button.
             */
            DefaultValuesInNewGrid.prototype.addButtonClick = function () {
                this.editItem({
                    CustomerID: 'ANTON',
                    RequiredDate: Q.formatDate(new Date(), 'yyyy-MM-dd'),
                    EmployeeID: AbidzarFrm.Northwind.EmployeeRow.getLookup().items
                        .filter(function (x) { return x.FullName === 'Robert King'; })[0].EmployeeID,
                    ShipVia: AbidzarFrm.Northwind.ShipperRow.getLookup().items
                        .filter(function (x) { return x.CompanyName === 'Speedy Express'; })[0].ShipperID
                });
            };
            DefaultValuesInNewGrid.prototype.getButtons = function () {
                var _this = this;
                // preserving default New Item button
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Add Order from the Queen',
                    cssClass: 'add-button',
                    onClick: function () {
                        // using EditItem method as a shortcut to create a new Order dialog,
                        // bind to its events, load our order row, and open dialog
                        _this.editItem({
                            CustomerID: 'QUEEN',
                            EmployeeID: AbidzarFrm.Northwind.EmployeeRow.getLookup().items
                                .filter(function (x) { return x.FullName === 'Nancy Davolio'; })[0].EmployeeID,
                            ShipVia: AbidzarFrm.Northwind.ShipperRow.getLookup().items
                                .filter(function (x) { return x.CompanyName === 'United Package'; })[0].ShipperID
                        });
                    }
                });
                buttons.push({
                    title: 'Add Order with 5 Chai by Laura', cssClass: 'add-note-button',
                    onClick: function () {
                        // we could use EditItem here too, but for demonstration
                        // purposes we are manually creating dialog this time
                        var dlg = new AbidzarFrm.Northwind.OrderDialog();
                        // let grid watch for changes to manually created dialog, 
                        // so when a new item is saved, grid can refresh itself
                        _this.initDialog(dlg);
                        // get a reference to product Chai
                        var chai = AbidzarFrm.Northwind.ProductRow.getLookup().items
                            .filter(function (x) { return x.ProductName === 'Chai'; })[0];
                        // LoadEntityAndOpenDialog, loads an OrderRow 
                        // to dialog and opens it
                        var lauraCallahanID = AbidzarFrm.Northwind.EmployeeRow.getLookup().items
                            .filter(function (x) { return x.FullName === 'Laura Callahan'; })[0].EmployeeID;
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: 'GOURL',
                            EmployeeID: lauraCallahanID,
                            DetailList: [{
                                    ProductID: chai.ProductID,
                                    ProductName: chai.ProductName,
                                    UnitPrice: chai.UnitPrice,
                                    Quantity: 5,
                                    LineTotal: chai.UnitPrice * 5
                                }]
                        });
                    }
                });
                return buttons;
            };
            DefaultValuesInNewGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DefaultValuesInNewGrid);
            return DefaultValuesInNewGrid;
        }(AbidzarFrm.Northwind.OrderGrid));
        BasicSamples.DefaultValuesInNewGrid = DefaultValuesInNewGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var DialogBoxes;
        (function (DialogBoxes) {
            function initializePage() {
                confirmDialogButtons();
                confirmWithCustomTitle();
                information();
                warning();
                alert();
                alertWithHtmlContent();
            }
            DialogBoxes.initializePage = initializePage;
            function confirmDialogButtons() {
                // here we demonstrate how you can detect which button user has clicked
                // second parameter is Yes handler and it is called only when user clicks Yes.
                // third parameter has some additional options, that you should only use when needed
                $('#ConfirmDialogButtons').click(function () {
                    Q.confirm("Click one of buttons, or close dialog with [x] on top right, i'll tell you what you did!", function () {
                        Q.notifySuccess("You clicked YES. Great!");
                    }, {
                        onNo: function () {
                            Q.notifyInfo("You clicked NO. Why?");
                        },
                        onCancel: function () {
                            Q.notifyError("You clicked X. Operation is cancelled. Will try again?");
                        }
                    });
                });
            }
            function confirmWithCustomTitle() {
                $('#ConfirmWithCustomTitle').click(function () {
                    Q.confirm("This confirmation has a custom title", function () {
                        Q.notifySuccess("Allright!");
                    }, {
                        title: 'Some Custom Confirmation Title'
                    });
                });
            }
            function information() {
                $('#Information').click(function () {
                    Q.information("What a nice day", function () {
                        Q.notifySuccess("No problem!");
                    });
                });
            }
            function warning() {
                $('#Warning').click(function () {
                    Q.warning("Hey, be careful!");
                });
            }
            function alert() {
                $('#Alert').click(function () {
                    Q.alert("Houston, we got a problem!");
                });
            }
            function alertWithHtmlContent() {
                $('#AlertWithHtmlContent').click(function () {
                    Q.alert("<h4>Here is some HTML content!</h4>" +
                        "<ul><li>Item 1</li><li>Item 2</li >" +
                        "<li>Visit <a href='http://serenity.is/' target='_blank' style='color: #ddf'>http://serenity.is/</a>!</li></ul>", {
                        htmlEncode: false
                    });
                });
            }
        })(DialogBoxes = BasicSamples.DialogBoxes || (BasicSamples.DialogBoxes = {}));
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var OrderDialog = /** @class */ (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderForm(_this.idPrefix);
                return _this;
            }
            OrderDialog.prototype.getFormKey = function () { return Northwind.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getNameProperty = function () { return Northwind.OrderRow.nameProperty; };
            OrderDialog.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(AbidzarFrm.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Northwind.OrderDetail',
                    getParams: function () { return ({
                        OrderID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            OrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            OrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], OrderDialog);
            return OrderDialog;
        }(Serenity.EntityDialog));
        Northwind.OrderDialog = OrderDialog;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
         */
        var EntityDialogAsPanel = /** @class */ (function (_super) {
            __extends(EntityDialogAsPanel, _super);
            function EntityDialogAsPanel() {
                return _super.call(this) || this;
            }
            EntityDialogAsPanel.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            EntityDialogAsPanel.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
            };
            EntityDialogAsPanel = __decorate([
                Serenity.Decorators.panel()
            ], EntityDialogAsPanel);
            return EntityDialogAsPanel;
        }(AbidzarFrm.Northwind.OrderDialog));
        BasicSamples.EntityDialogAsPanel = EntityDialogAsPanel;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CategoryDialog = /** @class */ (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Northwind.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Northwind.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Northwind.CategoryDialog = CategoryDialog;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Category/CategoryDialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var GetInsertedRecordIdDialog = /** @class */ (function (_super) {
            __extends(GetInsertedRecordIdDialog, _super);
            function GetInsertedRecordIdDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This method is called after the save request to service
             * is completed succesfully. This can be an insert or update.
             *
             * @param response Response that is returned from server
             */
            GetInsertedRecordIdDialog.prototype.onSaveSuccess = function (response) {
                // check that this is an insert
                if (this.isNew()) {
                    Q.notifySuccess("Just inserted a category with ID: " + response.EntityId);
                    // you could also open a new dialog
                    // new Northwind.CategoryDialog().loadByIdAndOpenDialog(response.EntityId);
                    // but let's better load inserted record using Retrieve service
                    AbidzarFrm.Northwind.CategoryService.Retrieve({
                        EntityId: response.EntityId
                    }, function (resp) {
                        Q.notifyInfo("Looks like the category you added has name: " + resp.Entity.CategoryName);
                    });
                }
            };
            GetInsertedRecordIdDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GetInsertedRecordIdDialog);
            return GetInsertedRecordIdDialog;
        }(AbidzarFrm.Northwind.CategoryDialog));
        BasicSamples.GetInsertedRecordIdDialog = GetInsertedRecordIdDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CategoryGrid = /** @class */ (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return "Northwind.Category"; };
            CategoryGrid.prototype.getDialogType = function () { return Northwind.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Northwind.CategoryGrid = CategoryGrid;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Category/CategoryGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
         */
        var GetInsertedRecordIdGrid = /** @class */ (function (_super) {
            __extends(GetInsertedRecordIdGrid, _super);
            function GetInsertedRecordIdGrid(container) {
                return _super.call(this, container) || this;
            }
            GetInsertedRecordIdGrid.prototype.getDialogType = function () { return BasicSamples.GetInsertedRecordIdDialog; };
            GetInsertedRecordIdGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GetInsertedRecordIdGrid);
            return GetInsertedRecordIdGrid;
        }(AbidzarFrm.Northwind.CategoryGrid));
        BasicSamples.GetInsertedRecordIdGrid = GetInsertedRecordIdGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
         */
        var OtherFormInTabDialog = /** @class */ (function (_super) {
            __extends(OtherFormInTabDialog, _super);
            function OtherFormInTabDialog() {
                var _this = _super.call(this) || this;
                // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                    idPrefix: _this.idPrefix + "_Customer_",
                    items: Q.getForm(AbidzarFrm.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                    useCategories: true
                });
                // this is just a helper to access editors if needed
                _this.customerForm = new AbidzarFrm.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                // initialize validator for customer form
                _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                var selfChange = 0;
                // creating another toolbar for customer tab that will only save Customer
                new Serenity.Toolbar(_this.byId("CustomerToolbar"), {
                    buttons: [{
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.SaveButton"),
                            onClick: function () {
                                var id = _this.getCustomerID();
                                if (!id)
                                    return;
                                if (!_this.customerValidator.form())
                                    return;
                                // prepare an empty entity to serialize customer details into
                                var c = {};
                                _this.customerPropertyGrid.save(c);
                                AbidzarFrm.Northwind.CustomerService.Update({
                                    EntityId: id,
                                    Entity: c
                                }, function (response) {
                                    // reload customer list just in case
                                    Q.reloadLookup(AbidzarFrm.Northwind.CustomerRow.lookupKey);
                                    // set flag that we are triggering customer select change event
                                    // otherwise active tab will change to first one
                                    selfChange++;
                                    try {
                                        // trigger change so that customer select updates its text
                                        // in case if Company Name is changed
                                        _this.form.CustomerID.element.change();
                                    }
                                    finally {
                                        selfChange--;
                                    }
                                    Q.notifySuccess("Saved customer details");
                                });
                            }
                        }]
                });
                _this.form.CustomerID.change(function (e) {
                    if (selfChange)
                        return;
                    var customerID = _this.getCustomerID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                    if (!customerID) {
                        // no customer is selected, just load an empty entity
                        _this.customerPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    AbidzarFrm.Northwind.CustomerService.Retrieve({
                        EntityId: customerID
                    }, function (response) {
                        _this.customerPropertyGrid.load(response.Entity);
                    });
                });
                return _this;
            }
            OtherFormInTabDialog.prototype.getCustomerID = function () {
                var customerID = this.form.CustomerID.value;
                if (Q.isEmptyOrNull(customerID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                return Q.first(AbidzarFrm.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
            };
            OtherFormInTabDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
            };
            OtherFormInTabDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormInTabDialog);
            return OtherFormInTabDialog;
        }(AbidzarFrm.Northwind.OrderDialog));
        BasicSamples.OtherFormInTabDialog = OtherFormInTabDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
         */
        var OtherFormInTabGrid = /** @class */ (function (_super) {
            __extends(OtherFormInTabGrid, _super);
            function OtherFormInTabGrid(container) {
                return _super.call(this, container) || this;
            }
            OtherFormInTabGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormInTabDialog; };
            OtherFormInTabGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormInTabGrid);
            return OtherFormInTabGrid;
        }(AbidzarFrm.Northwind.OrderGrid));
        BasicSamples.OtherFormInTabGrid = OtherFormInTabGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
         * With single toolbar for all forms
         */
        var OtherFormOneBarDialog = /** @class */ (function (_super) {
            __extends(OtherFormOneBarDialog, _super);
            function OtherFormOneBarDialog() {
                var _this = _super.call(this) || this;
                _this.selfChange = 0;
                // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                    items: Q.getForm(AbidzarFrm.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                    idPrefix: _this.idPrefix + "_Customer_",
                    useCategories: true
                });
                // this is just a helper to access editors if needed
                _this.customerForm = new AbidzarFrm.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                // initialize validator for customer form
                _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                _this.form.CustomerID.change(function (e) {
                    if (_this.selfChange)
                        return;
                    var customerID = _this.getCustomerID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                    if (!customerID) {
                        // no customer is selected, just load an empty entity
                        _this.customerPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    AbidzarFrm.Northwind.CustomerService.Retrieve({
                        EntityId: customerID
                    }, function (response) {
                        _this.customerPropertyGrid.load(response.Entity);
                    });
                });
                return _this;
            }
            OtherFormOneBarDialog.prototype.getCustomerID = function () {
                var customerID = this.form.CustomerID.value;
                if (Q.isEmptyOrNull(customerID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                return Q.first(AbidzarFrm.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
            };
            OtherFormOneBarDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
            };
            // Save the customer and the order 
            OtherFormOneBarDialog.prototype.saveCustomer = function (callback, onSuccess) {
                var _this = this;
                var id = this.getCustomerID();
                if (!id) {
                    // If id of Customer isn't present, we save only Order entity
                    onSuccess(null);
                }
                else {
                    // Get current tab
                    var currTab = Serenity.TabsExtensions.activeTabKey(this.tabs);
                    // Select the correct tab and validate to see the error message in tab
                    Serenity.TabsExtensions.selectTab(this.tabs, "Customer");
                    if (!this.customerValidator.form()) {
                        return false;
                    }
                    // Re-select initial tab
                    Serenity.TabsExtensions.selectTab(this.tabs, currTab);
                    // prepare an empty entity to serialize customer details into
                    var c = {};
                    this.customerPropertyGrid.save(c);
                    AbidzarFrm.Northwind.CustomerService.Update({
                        EntityId: id,
                        Entity: c
                    }, function (response) {
                        // reload customer list just in case
                        Q.reloadLookup(AbidzarFrm.Northwind.CustomerRow.lookupKey);
                        // set flag that we are triggering customer select change event
                        // otherwise active tab will change to first one
                        _this.selfChange++;
                        try {
                            // trigger change so that customer select updates its text
                            // in case if Company Name is changed
                            _this.form.CustomerID.element.change();
                        }
                        finally {
                            _this.selfChange--;
                        }
                        onSuccess(response);
                    });
                }
                return true;
            };
            // Call super.save to save Order entity
            OtherFormOneBarDialog.prototype.saveOrder = function (callback) {
                _super.prototype.save.call(this, callback);
            };
            OtherFormOneBarDialog.prototype.saveAll = function (callback) {
                var _this = this;
                this.saveCustomer(callback, 
                // If customer successa, save Order entity
                function (resp) { return _this.saveOrder(callback); });
            };
            // This is called when save/update button is pressed
            OtherFormOneBarDialog.prototype.save = function (callback) {
                this.saveAll(callback);
            };
            OtherFormOneBarDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormOneBarDialog);
            return OtherFormOneBarDialog;
        }(AbidzarFrm.Northwind.OrderDialog));
        BasicSamples.OtherFormOneBarDialog = OtherFormOneBarDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to OtherFormInTabOneBarDialog
         */
        var OtherFormInTabOneBarGrid = /** @class */ (function (_super) {
            __extends(OtherFormInTabOneBarGrid, _super);
            function OtherFormInTabOneBarGrid(container) {
                return _super.call(this, container) || this;
            }
            OtherFormInTabOneBarGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormOneBarDialog; };
            OtherFormInTabOneBarGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormInTabOneBarGrid);
            return OtherFormInTabOneBarGrid;
        }(AbidzarFrm.Northwind.OrderGrid));
        BasicSamples.OtherFormInTabOneBarGrid = OtherFormInTabOneBarGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataDialog = /** @class */ (function (_super) {
            __extends(PopulateLinkedDataDialog, _super);
            function PopulateLinkedDataDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.PopulateLinkedDataForm(_this.idPrefix);
                // "changeSelect2" is only fired when user changes the selection
                // but "change" is fired when dialog sets customer on load too
                // so we prefer "changeSelect2", as initial customer details 
                // will get populated by initial load, we don't want extra call
                _this.form.CustomerID.changeSelect2(function (e) {
                    var customerID = _this.form.CustomerID.value;
                    if (Q.isEmptyOrNull(customerID)) {
                        _this.setCustomerDetails({});
                        return;
                    }
                    // in northwind CustomerID is a string like "ALFKI", 
                    // while its actual integer ID value is 1.
                    // so we need to convert customer ID to ID.
                    // you won't have to do this conversion with your tables
                    var id = Q.first(AbidzarFrm.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
                    AbidzarFrm.Northwind.CustomerService.Retrieve({
                        EntityId: id
                    }, function (response) {
                        _this.setCustomerDetails(response.Entity);
                    });
                });
                return _this;
            }
            PopulateLinkedDataDialog.prototype.getFormKey = function () { return BasicSamples.PopulateLinkedDataForm.formKey; };
            PopulateLinkedDataDialog.prototype.getIdProperty = function () { return AbidzarFrm.Northwind.OrderRow.idProperty; };
            PopulateLinkedDataDialog.prototype.getLocalTextPrefix = function () { return AbidzarFrm.Northwind.OrderRow.localTextPrefix; };
            PopulateLinkedDataDialog.prototype.getNameProperty = function () { return AbidzarFrm.Northwind.OrderRow.nameProperty; };
            PopulateLinkedDataDialog.prototype.getService = function () { return AbidzarFrm.Northwind.OrderService.baseUrl; };
            PopulateLinkedDataDialog.prototype.setCustomerDetails = function (details) {
                this.form.CustomerCity.value = details.City;
                this.form.CustomerContactName.value = details.ContactName;
                this.form.CustomerContactTitle.value = details.ContactTitle;
                this.form.CustomerCountry.value = details.Country;
                this.form.CustomerFax.value = details.Fax;
                this.form.CustomerPhone.value = details.Phone;
                this.form.CustomerRegion.value = details.Region;
            };
            /**
             * This dialog will have CSS class "s-PopulateLinkedDataDialog"
             * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
             * This has no effect other than looks on populate linked data demonstration
             */
            PopulateLinkedDataDialog.prototype.getCssClass = function () {
                return _super.prototype.getCssClass.call(this) + " s-OrderDialog s-Northwind-OrderDialog";
            };
            PopulateLinkedDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PopulateLinkedDataDialog);
            return PopulateLinkedDataDialog;
        }(Serenity.EntityDialog));
        BasicSamples.PopulateLinkedDataDialog = PopulateLinkedDataDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A subclass of OrderGrid that launches PopulateLinkedDataDialog
         */
        var PopulateLinkedDataGrid = /** @class */ (function (_super) {
            __extends(PopulateLinkedDataGrid, _super);
            function PopulateLinkedDataGrid(container) {
                return _super.call(this, container) || this;
            }
            PopulateLinkedDataGrid.prototype.getDialogType = function () { return BasicSamples.PopulateLinkedDataDialog; };
            PopulateLinkedDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PopulateLinkedDataGrid);
            return PopulateLinkedDataGrid;
        }(AbidzarFrm.Northwind.OrderGrid));
        BasicSamples.PopulateLinkedDataGrid = PopulateLinkedDataGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var SupplierDialog = /** @class */ (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.SupplierForm(_this.idPrefix);
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Northwind.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Northwind.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierDialog.prototype.getLanguages = function () {
                return AbidzarFrm.LanguageList.getValue();
            };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Northwind.SupplierDialog = SupplierDialog;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Supplier/SupplierDialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var ReadOnlyDialog = /** @class */ (function (_super) {
            __extends(ReadOnlyDialog, _super);
            function ReadOnlyDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This is the method that gets list of tool
             * buttons to be created in a dialog.
             *
             * Here we'll remove save and close button, and
             * apply changes buttons.
             */
            ReadOnlyDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                // We could also remove delete button here, but for demonstration 
                // purposes we'll hide it in another method (updateInterface)
                // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
                return buttons;
            };
            /**
             * This method is a good place to update states of
             * interface elements. It is called after dialog
             * is initialized and an entity is loaded into dialog.
             * This is also called in new item mode.
             */
            ReadOnlyDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // finding all editor elements and setting their readonly attribute
                // note that this helper method only works with basic inputs, 
                // some editors require widget based set readonly overload (setReadOnly)
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // remove required asterisk (*)
                this.element.find('sup').hide();
                // here is a way to locate a button by its css class
                // note that this method is not available in 
                // getToolbarButtons() because buttons are not 
                // created there yet!
                // 
                // this.toolbar.findButton('delete-button').hide();
                // entity dialog also has reference variables to
                // its default buttons, lets use them to hide delete button
                this.deleteButton.hide();
                // we could also hide save buttons just like delete button,
                // but they are null now as we removed them in getToolbarButtons()
                // if we didn't we could write like this:
                // 
                // this.applyChangesButton.hide();
                // this.saveAndCloseButton.hide();
                // instead of hiding, we could disable a button
                // 
                // this.deleteButton.toggleClass('disabled', true);
            };
            /**
             * This method is called when dialog title needs to be updated.
             * Base class returns something like 'Edit xyz' for edit mode,
             * and 'New xyz' for new record mode.
             *
             * But our dialog is readonly, so we should change it to 'View xyz'
             */
            ReadOnlyDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    // we shouldn't hit here, but anyway for demo...
                    return "How did you manage to open this dialog in new record mode?";
                }
                else {
                    // entitySingular is type of record this dialog edits. something like 'Supplier'.
                    // you could hardcode it, but this is for demonstration
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    // get name field value of record this dialog edits
                    var name_1 = this.getEntityNameFieldValue() || "";
                    // you could use Q.format with a local text, but again demo...
                    return 'View ' + entityType + " (" + name_1 + ")";
                }
            };
            /**
             * This method is actually the one that calls getEntityTitle()
             * and updates the dialog title. We could do it here too...
             */
            ReadOnlyDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
                // remove super.updateTitle() call above and uncomment 
                // below line if you'd like to use this version
                // 
                // this.dialogTitle = 'View Supplier (' + this.getEntityNameFieldValue() + ')';
            };
            ReadOnlyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReadOnlyDialog);
            return ReadOnlyDialog;
        }(AbidzarFrm.Northwind.SupplierDialog));
        BasicSamples.ReadOnlyDialog = ReadOnlyDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var SupplierGrid = /** @class */ (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            SupplierGrid.prototype.getDialogType = function () { return Northwind.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Northwind.SupplierGrid = SupplierGrid;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A readonly grid that launches ReadOnlyDialog
         */
        var ReadOnlyGrid = /** @class */ (function (_super) {
            __extends(ReadOnlyGrid, _super);
            function ReadOnlyGrid(container) {
                return _super.call(this, container) || this;
            }
            ReadOnlyGrid.prototype.getDialogType = function () { return BasicSamples.ReadOnlyDialog; };
            /**
             * Removing add button from grid using its css class
             */
            ReadOnlyGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            ReadOnlyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReadOnlyGrid);
            return ReadOnlyGrid;
        }(AbidzarFrm.Northwind.SupplierGrid));
        BasicSamples.ReadOnlyGrid = ReadOnlyGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.CustomerForm(_this.idPrefix);
                _this.ordersGrid = new Northwind.CustomerOrdersGrid(_this.byId('OrdersGrid'));
                // force order dialog to open in Dialog mode instead of Panel mode
                // which is set as default on OrderDialog with @panelAttribute
                _this.ordersGrid.openDialogsAsPanel = false;
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                AbidzarFrm.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Northwind.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Northwind.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                this.ordersGrid.customerID = entity.CustomerID;
            };
            CustomerDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Northwind.Customer');
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Northwind.CustomerDialog = CustomerDialog;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Customer/CustomerDialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var SerialAutoNumberDialog = /** @class */ (function (_super) {
            __extends(SerialAutoNumberDialog, _super);
            function SerialAutoNumberDialog() {
                var _this = _super.call(this) || this;
                _this.form.CustomerID.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
                return _this;
            }
            SerialAutoNumberDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
            };
            SerialAutoNumberDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.CustomerID.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'C').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    AbidzarFrm.Northwind.CustomerService.GetNextNumber({
                        Prefix: prefix,
                        Length: 5 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.CustomerID.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.CustomerID.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            SerialAutoNumberDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SerialAutoNumberDialog);
            return SerialAutoNumberDialog;
        }(AbidzarFrm.Northwind.CustomerDialog));
        BasicSamples.SerialAutoNumberDialog = SerialAutoNumberDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return "Northwind.Customer"; };
            CustomerGrid.prototype.getDialogType = function () { return Northwind.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(AbidzarFrm.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Northwind/Customer/ListExcel',
                    separator: true
                }));
                buttons.push(AbidzarFrm.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Northwind.CustomerGrid = CustomerGrid;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
         */
        var SerialAutoNumberGrid = /** @class */ (function (_super) {
            __extends(SerialAutoNumberGrid, _super);
            function SerialAutoNumberGrid(container) {
                return _super.call(this, container) || this;
            }
            SerialAutoNumberGrid.prototype.getDialogType = function () { return BasicSamples.SerialAutoNumberDialog; };
            SerialAutoNumberGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SerialAutoNumberGrid);
            return SerialAutoNumberGrid;
        }(AbidzarFrm.Northwind.CustomerGrid));
        BasicSamples.SerialAutoNumberGrid = SerialAutoNumberGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Common/Helpers/GridEditorDialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChangingLookupTextDialog = /** @class */ (function (_super) {
            __extends(ChangingLookupTextDialog, _super);
            function ChangingLookupTextDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.ChangingLookupTextForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = AbidzarFrm.Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            ChangingLookupTextDialog.prototype.getFormKey = function () { return BasicSamples.ChangingLookupTextForm.formKey; };
            ChangingLookupTextDialog.prototype.getLocalTextPrefix = function () { return AbidzarFrm.Northwind.OrderDetailRow.localTextPrefix; };
            ChangingLookupTextDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('save-and-close-button').hide();
            };
            ChangingLookupTextDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangingLookupTextDialog);
            return ChangingLookupTextDialog;
        }(AbidzarFrm.Common.GridEditorDialog));
        BasicSamples.ChangingLookupTextDialog = ChangingLookupTextDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom product editor type
         */
        var ChangingLookupTextEditor = /** @class */ (function (_super) {
            __extends(ChangingLookupTextEditor, _super);
            function ChangingLookupTextEditor(container, options) {
                return _super.call(this, container, options) || this;
            }
            ChangingLookupTextEditor.prototype.getLookupKey = function () {
                return AbidzarFrm.Northwind.ProductRow.lookupKey;
            };
            ChangingLookupTextEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) +
                    ' (' +
                    '$' + Q.formatNumber(item.UnitPrice, '#,##0.00') +
                    ', ' + (item.UnitsInStock > 0 ? (item.UnitsInStock + ' in stock') : 'out of stock') +
                    ', ' + (item.SupplierCompanyName || 'Unknown') +
                    ')';
            };
            ChangingLookupTextEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ChangingLookupTextEditor);
            return ChangingLookupTextEditor;
        }(Serenity.LookupEditorBase));
        BasicSamples.ChangingLookupTextEditor = ChangingLookupTextEditor;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailDialog = /** @class */ (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderDetailForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Northwind.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailDialog);
            return OrderDetailDialog;
        }(AbidzarFrm.Common.GridEditorDialog));
        Northwind.OrderDetailDialog = OrderDetailDialog;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailDialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of order detail dialog with a CategoryID property
         * that will be used to set CascadeValue of product editor
         */
        var FilteredLookupOrderDetailDialog = /** @class */ (function (_super) {
            __extends(FilteredLookupOrderDetailDialog, _super);
            function FilteredLookupOrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new AbidzarFrm.Northwind.OrderDetailForm(_this.idPrefix);
                // we can set cascade field in constructor
                // we could also use FilterField but in this case, when CategoryID is null
                // lookup editor would show all products in any category
                _this.form.ProductID.cascadeField = "CategoryID" /* CategoryID */;
                return _this;
                // but CategoryID value is not yet available here as detail editor will set it 
                // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
            }
            /**
             * This method is called just before an entity is loaded to dialog
             * This is also called for new record mode with an empty entity
             */
            FilteredLookupOrderDetailDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
                // setting cascade value here
                // make sure you have [LookupInclude] on CategoryID property of ProductRow
                // otherwise this field won't be available in lookup script (will always be null),
                // so can't be filtered and you'll end up with an empty product list.
                this.form.ProductID.cascadeValue = this.categoryID;
            };
            FilteredLookupOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupOrderDetailDialog);
            return FilteredLookupOrderDetailDialog;
        }(AbidzarFrm.Northwind.OrderDetailDialog));
        BasicSamples.FilteredLookupOrderDetailDialog = FilteredLookupOrderDetailDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailsEditor = /** @class */ (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Northwind.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Northwind.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Northwind.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            OrderDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsEditor);
            return OrderDetailsEditor;
        }(AbidzarFrm.Common.GridEditorBase));
        Northwind.OrderDetailsEditor = OrderDetailsEditor;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailsEditor.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of Order Details editor with a CategoryID property
         */
        var FilteredLookupDetailEditor = /** @class */ (function (_super) {
            __extends(FilteredLookupDetailEditor, _super);
            function FilteredLookupDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupDetailEditor.prototype.getDialogType = function () { return BasicSamples.FilteredLookupOrderDetailDialog; };
            /**
             * This method is called to initialize an edit dialog created by
             * grid editor when Add button or an edit link is clicked
             * We have an opportunity here to pass CategoryID to edit dialog
             */
            FilteredLookupDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.categoryID = this.categoryID;
            };
            FilteredLookupDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], FilteredLookupDetailEditor);
            return FilteredLookupDetailEditor;
        }(AbidzarFrm.Northwind.OrderDetailsEditor));
        BasicSamples.FilteredLookupDetailEditor = FilteredLookupDetailEditor;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Basic order dialog with a category selection
         */
        var FilteredLookupInDetailDialog = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailDialog, _super);
            function FilteredLookupInDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.FilteredLookupInDetailForm(_this.idPrefix);
                _this.form.CategoryID.change(function (e) {
                    _this.form.DetailList.categoryID = Q.toId(_this.form.CategoryID.value);
                });
                return _this;
            }
            FilteredLookupInDetailDialog.prototype.getFormKey = function () { return BasicSamples.FilteredLookupInDetailForm.formKey; };
            FilteredLookupInDetailDialog.prototype.getIdProperty = function () { return AbidzarFrm.Northwind.OrderRow.idProperty; };
            FilteredLookupInDetailDialog.prototype.getLocalTextPrefix = function () { return AbidzarFrm.Northwind.OrderRow.localTextPrefix; };
            FilteredLookupInDetailDialog.prototype.getNameProperty = function () { return AbidzarFrm.Northwind.OrderRow.nameProperty; };
            FilteredLookupInDetailDialog.prototype.getService = function () { return AbidzarFrm.Northwind.OrderService.baseUrl; };
            FilteredLookupInDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailDialog);
            return FilteredLookupInDetailDialog;
        }(Serenity.EntityDialog));
        BasicSamples.FilteredLookupInDetailDialog = FilteredLookupInDetailDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
         */
        var FilteredLookupInDetailGrid = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailGrid, _super);
            function FilteredLookupInDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupInDetailGrid.prototype.getDialogType = function () { return BasicSamples.FilteredLookupInDetailDialog; };
            FilteredLookupInDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailGrid);
            return FilteredLookupInDetailGrid;
        }(AbidzarFrm.Northwind.OrderGrid));
        BasicSamples.FilteredLookupInDetailGrid = FilteredLookupInDetailGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our custom product dialog that uses a different product form
         * (LookupFilterByMultipleForm) with our special category editor.
         */
        var LookupFilterByMultipleDialog = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleDialog, _super);
            function LookupFilterByMultipleDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LookupFilterByMultipleDialog.prototype.getFormKey = function () { return BasicSamples.LookupFilterByMultipleForm.formKey; };
            LookupFilterByMultipleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleDialog);
            return LookupFilterByMultipleDialog;
        }(AbidzarFrm.Northwind.ProductDialog));
        BasicSamples.LookupFilterByMultipleDialog = LookupFilterByMultipleDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var LookupFilterByMultipleGrid = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleGrid, _super);
            function LookupFilterByMultipleGrid(container) {
                return _super.call(this, container) || this;
            }
            LookupFilterByMultipleGrid.prototype.getDialogType = function () { return BasicSamples.LookupFilterByMultipleDialog; };
            /**
             * This method is called just before List request is sent to service.
             * You have an opportunity here to cancel request or modify it.
             * Here we'll add a custom criteria to list request.
             */
            LookupFilterByMultipleGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // this has no relation to our lookup editor but as we'll allow picking only 
                // categories of Produce and Seafood in product dialog, it's better to show
                // only products from these categories in grid too
                var request = this.view.params;
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['CategoryName'], 'in', [['Produce', 'Seafood']]]);
                // brackets used are important above, NOT ['CategoryName', 'in', ['Produce', 'Seafood']]
                return true;
            };
            LookupFilterByMultipleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleGrid);
            return LookupFilterByMultipleGrid;
        }(AbidzarFrm.Northwind.ProductGrid));
        BasicSamples.LookupFilterByMultipleGrid = LookupFilterByMultipleGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our category editor that will show only categories of Produce and
         * Seafood. We are subclassing LookupEditorBase which also LookupEditor
         * derives from.
         *
         * After compiling and transforming templates, this editor type will be
         * available in server side to use in our LookupFilterByMultipleForm,
         * which is a version of ProductForm that uses our custom editor.
         */
        var ProduceSeafoodCategoryEditor = /** @class */ (function (_super) {
            __extends(ProduceSeafoodCategoryEditor, _super);
            function ProduceSeafoodCategoryEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            /**
             * Normally LookupEditor requires a lookup key to determine which set of
             * lookup data to show in editor. As our editor will only show category
             * data, we lock it to category lookup key.
             */
            ProduceSeafoodCategoryEditor.prototype.getLookupKey = function () {
                return AbidzarFrm.Northwind.CategoryRow.lookupKey;
            };
            /**
             * Here we are filtering by category name but you could filter by any field.
             * Just make sure the fields you filter on has [LookupInclude] attribute on them,
             * otherwise their value will be null in client side as they are not sent back
             * from server in lookup script.
             */
            ProduceSeafoodCategoryEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.CategoryName === 'Produce' || x.CategoryName === 'Seafood';
                });
            };
            ProduceSeafoodCategoryEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProduceSeafoodCategoryEditor);
            return ProduceSeafoodCategoryEditor;
        }(Serenity.LookupEditorBase));
        BasicSamples.ProduceSeafoodCategoryEditor = ProduceSeafoodCategoryEditor;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var HardcodedValuesDialog = /** @class */ (function (_super) {
            __extends(HardcodedValuesDialog, _super);
            function HardcodedValuesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.HardcodedValuesForm(_this.idPrefix);
                _this.dialogTitle = "Please select some value";
                _this.form.SomeValue.changeSelect2(function (e) {
                    Q.notifySuccess("You selected item with key: " + _this.form.SomeValue.value);
                });
                return _this;
            }
            HardcodedValuesDialog.prototype.getFormKey = function () { return BasicSamples.HardcodedValuesForm.formKey; };
            HardcodedValuesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], HardcodedValuesDialog);
            return HardcodedValuesDialog;
        }(Serenity.PropertyDialog));
        BasicSamples.HardcodedValuesDialog = HardcodedValuesDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var HardcodedValuesEditor = /** @class */ (function (_super) {
            __extends(HardcodedValuesEditor, _super);
            function HardcodedValuesEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("key1", "Text 1");
                _this.addOption("key2", "Text 2");
                // you may also use addItem which accepts a Select2Item parameter
                _this.addItem({
                    id: "key3",
                    text: "Text 3"
                });
                // don't let selecting this one (disabled)
                _this.addItem({
                    id: "key4",
                    text: "Text 4",
                    disabled: true
                });
                return _this;
            }
            HardcodedValuesEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], HardcodedValuesEditor);
            return HardcodedValuesEditor;
        }(Serenity.Select2Editor));
        BasicSamples.HardcodedValuesEditor = HardcodedValuesEditor;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var StaticTextBlockDialog = /** @class */ (function (_super) {
            __extends(StaticTextBlockDialog, _super);
            function StaticTextBlockDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.StaticTextBlockForm(_this.idPrefix);
                _this.dialogTitle = "A form with static text blocks";
                return _this;
            }
            StaticTextBlockDialog.prototype.getFormKey = function () { return BasicSamples.StaticTextBlockForm.formKey; };
            /**
             * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
             * If this was an EntityDialog, your field value would be originating from server side entity.
             */
            StaticTextBlockDialog.prototype.loadInitialEntity = function () {
                this.propertyGrid.load({
                    DisplayFieldValue: 'This content comes from <b>the value</b> of <em>DisplayFieldValue</em> field.'
                });
            };
            StaticTextBlockDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.width = 650;
                return opt;
            };
            StaticTextBlockDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StaticTextBlockDialog);
            return StaticTextBlockDialog;
        }(Serenity.PropertyDialog));
        BasicSamples.StaticTextBlockDialog = StaticTextBlockDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new AbidzarFrm.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Common/Helpers/BulkServiceAction.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var OrderBulkAction = /** @class */ (function (_super) {
            __extends(OrderBulkAction, _super);
            function OrderBulkAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This controls how many service requests will be used in parallel.
             * Determine this number based on how many requests your server
             * might be able to handle, and amount of wait on external resources.
             */
            OrderBulkAction.prototype.getParallelRequests = function () {
                return 10;
            };
            /**
             * These number of records IDs will be sent to your service in one
             * service call. If your service is designed to handle one record only,
             * set it to 1. But note that, if you have 5000 records, this will
             * result in 5000 service calls / requests.
             */
            OrderBulkAction.prototype.getBatchSize = function () {
                return 5;
            };
            /**
             * This is where you should call your service.
             * Batch parameter contains the selected order IDs
             * that should be processed in this service call.
             */
            OrderBulkAction.prototype.executeForBatch = function (batch) {
                var _this = this;
                BasicSamples.BasicSamplesService.OrderBulkAction({
                    OrderIDs: batch.map(function (x) { return Q.parseInteger(x); })
                }, function (response) { return _this.set_successCount(_this.get_successCount() + batch.length); }, {
                    blockUI: false,
                    onError: function (response) { return _this.set_errorCount(_this.get_errorCount() + batch.length); },
                    onCleanup: function () { return _this.serviceCallCleanup(); }
                });
            };
            return OrderBulkAction;
        }(AbidzarFrm.Common.BulkServiceAction));
        BasicSamples.OrderBulkAction = OrderBulkAction;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
/// <reference path="OrderBulkAction.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var CancellableBulkActionGrid = /** @class */ (function (_super) {
            __extends(CancellableBulkActionGrid, _super);
            function CancellableBulkActionGrid(container) {
                return _super.call(this, container) || this;
            }
            CancellableBulkActionGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            CancellableBulkActionGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Perform Bulk Action on Selected Orders',
                        cssClass: 'send-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new BasicSamples.OrderBulkAction();
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    }];
            };
            CancellableBulkActionGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            CancellableBulkActionGrid.prototype.getViewOptions = function () {
                var opt = _super.prototype.getViewOptions.call(this);
                opt.rowsPerPage = 2500;
                return opt;
            };
            CancellableBulkActionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CancellableBulkActionGrid);
            return CancellableBulkActionGrid;
        }(AbidzarFrm.Northwind.OrderGrid));
        BasicSamples.CancellableBulkActionGrid = CancellableBulkActionGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var ConditionalFormattingGrid = /** @class */ (function (_super) {
            __extends(ConditionalFormattingGrid, _super);
            function ConditionalFormattingGrid(container) {
                return _super.call(this, container) || this;
            }
            ConditionalFormattingGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ConditionalFormattingGrid.prototype.getDialogType = function () { return AbidzarFrm.Northwind.ProductDialog; };
            ConditionalFormattingGrid.prototype.getIdProperty = function () { return AbidzarFrm.Northwind.ProductRow.idProperty; };
            ConditionalFormattingGrid.prototype.getLocalTextPrefix = function () { return AbidzarFrm.Northwind.ProductRow.localTextPrefix; };
            ConditionalFormattingGrid.prototype.getService = function () { return AbidzarFrm.Northwind.ProductService.baseUrl; };
            /**
             * We override getColumns() to be able to add a custom CSS class to UnitPrice
             * We could also add this class in ProductColumns.cs but didn't want to modify
             * it solely for this sample.
             */
            ConditionalFormattingGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                // adding a specific css class to UnitPrice column, 
                // to be able to format cell with a different background
                Q.first(columns, function (x) { return x.field == "UnitPrice" /* UnitPrice */; }).cssClass += " col-unit-price";
                return columns;
            };
            /**
             * This method is called for all rows
             * @param item Data item for current row
             * @param index Index of the row in grid
             */
            ConditionalFormattingGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Discontinued == true)
                    klass += " discontinued";
                else if (item.UnitsInStock <= 0)
                    klass += " out-of-stock";
                else if (item.UnitsInStock < 20)
                    klass += " critical-stock";
                else if (item.UnitsInStock > 50)
                    klass += " needs-reorder";
                if (item.UnitPrice >= 50)
                    klass += " high-price";
                else if (item.UnitPrice >= 20)
                    klass += " medium-price";
                else
                    klass += " low-price";
                return Q.trimToNull(klass);
            };
            ConditionalFormattingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ConditionalFormattingGrid);
            return ConditionalFormattingGrid;
        }(Serenity.EntityGrid));
        BasicSamples.ConditionalFormattingGrid = ConditionalFormattingGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomLinksInGrid = /** @class */ (function (_super) {
            __extends(CustomLinksInGrid, _super);
            function CustomLinksInGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * We override getColumns() to change format functions for some columns.
             * You could also write them as formatter classes, and use them at server side
             */
            CustomLinksInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "CustomerCompanyName" /* CustomerCompanyName */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"customer-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == "OrderDate" /* OrderDate */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"date-link\">" + Q.formatDate(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == "EmployeeFullName" /* EmployeeFullName */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"employee-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == "ShipCountry" /* ShipCountry */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"ship-country-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            CustomLinksInGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.hasClass("customer-link")) {
                    e.preventDefault();
                    var message = Q.format("<p>You have clicked an order from customer: {0}.</p>" +
                        "<p>If you click Yes, i'll open Customer dialog.</p>" +
                        "<p>If you click No, i'll open Order dialog.</p>", Q.htmlEncode(item.CustomerCompanyName));
                    Q.confirm(message, function () {
                        // CustomerDialog doesn't use CustomerID but ID (identity)
                        // so need to find customer to get its actual ID
                        var customer = Q.first(AbidzarFrm.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == item.CustomerID; });
                        new AbidzarFrm.Northwind.CustomerDialog().loadByIdAndOpenDialog(customer.ID);
                    }, {
                        htmlEncode: false,
                        onNo: function () {
                            new AbidzarFrm.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                        }
                    });
                }
                else if (target.hasClass("date-link")) {
                    e.preventDefault();
                    var ordersInSameDate = Q.count(this.view.getItems(), function (x) { return x.OrderDate == item.OrderDate; });
                    Q.notifyInfo("You clicked an order from date " +
                        Q.formatDate(item.OrderDate) + ". There are " +
                        ordersInSameDate + " orders from the same date that is loaded in grid at the moment");
                }
                else if (target.hasClass("employee-link")) {
                    e.preventDefault();
                    Q.notifySuccess("You clicked an employee name, " +
                        "so i've opened a new Order Dialog from same customer " +
                        "with that employee prepopulated!");
                    new AbidzarFrm.Northwind.OrderDialog().loadEntityAndOpenDialog({
                        CustomerID: item.CustomerID,
                        EmployeeID: item.EmployeeID
                    });
                }
                else if (target.hasClass("ship-country-link")) {
                    e.preventDefault();
                    Q.notifySuccess("Let's filter the grid to orders from " + item.ShipCountry);
                    var countryFilter = this.findQuickFilter(Serenity.LookupEditor, "ShipCountry" /* ShipCountry */);
                    countryFilter.value = item.ShipCountry;
                    this.refresh();
                }
            };
            /**
             * This method is called for columns with [EditLink] attribute,
             * but only for edit links of this grid's own item type.
             * It is also called by Add Product button with a NULL entityOrId
             * parameter so we should check that entityOrId is a string
             * to be sure it is originating from a link.
             *
             * As we changed format for other columns, this will only be called
             * for links in remaining OrderID column
             */
            CustomLinksInGrid.prototype.editItem = function (entityOrId) {
                // check that this is an edit link click, not add button, ID is always a string
                if (typeof entityOrId == "string") {
                    // convert ID to an integer, and find order with that ID
                    var item = this.view.getItemById(Q.toId(entityOrId));
                    // date is a ISO string, so need to parse it first
                    var date = Q.formatDate(item.OrderDate);
                    // ask for confirmation
                    Q.confirm(Q.format("You clicked edit link for order with ID: {0} and Date: {1}. Should i open that order?", item.OrderID, date), function () {
                        new AbidzarFrm.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                    });
                }
                else {
                    _super.prototype.editItem.call(this, entityOrId);
                }
            };
            CustomLinksInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomLinksInGrid);
            return CustomLinksInGrid;
        }(AbidzarFrm.Northwind.OrderGrid));
        BasicSamples.CustomLinksInGrid = CustomLinksInGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleDialog = /** @class */ (function (_super) {
            __extends(DragDropSampleDialog, _super);
            function DragDropSampleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BasicSamples.DragDropSampleForm(_this.idPrefix);
                return _this;
            }
            DragDropSampleDialog.prototype.getFormKey = function () { return BasicSamples.DragDropSampleForm.formKey; };
            DragDropSampleDialog.prototype.getIdProperty = function () { return BasicSamples.DragDropSampleRow.idProperty; };
            DragDropSampleDialog.prototype.getLocalTextPrefix = function () { return BasicSamples.DragDropSampleRow.localTextPrefix; };
            DragDropSampleDialog.prototype.getNameProperty = function () { return BasicSamples.DragDropSampleRow.nameProperty; };
            DragDropSampleDialog.prototype.getService = function () { return BasicSamples.DragDropSampleService.baseUrl; };
            DragDropSampleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DragDropSampleDialog);
            return DragDropSampleDialog;
        }(Serenity.EntityDialog));
        BasicSamples.DragDropSampleDialog = DragDropSampleDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleGrid = /** @class */ (function (_super) {
            __extends(DragDropSampleGrid, _super);
            function DragDropSampleGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.TreeGridMixin({
                    grid: _this,
                    toggleField: "Title" /* Title */,
                    getParentId: function (x) { return x.ParentId; },
                    initialCollapse: function () { return false; },
                });
                // save prior drag target to restore its color during drag
                var priorDragTarget;
                // prevent the grid from cancelling drag'n'drop by default
                _this.slickGrid.onDragInit.subscribe(function (e, dd) {
                    e.stopImmediatePropagation();
                });
                // this method is called when an item is about to be dragged
                _this.slickGrid.onDragStart.subscribe(function (e, dd) {
                    // only allow edit links to be dragged
                    if (!$(e.target).hasClass('s-EditLink'))
                        return;
                    // make sure there is a cell in source location
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    if (!cell) {
                        return;
                    }
                    // notify that we'll handle drag
                    e.stopImmediatePropagation();
                    // save details about dragged item
                    dd.row = cell.row;
                    var item = _this.itemAt(cell.row);
                    dd.item = item;
                    // a unique name for our operation
                    dd.mode = "move";
                    // create an absolute position helper shown during dragging
                    var helper = $("<span></span>")
                        .addClass('drag-helper')
                        .text("Moving " + item.Title)
                        .appendTo(document.body);
                    dd.helper = helper;
                });
                // this method is periodically called during drag
                _this.slickGrid.onDrag.subscribe(function (e, dd) {
                    // only handle our operation
                    if (dd.mode != "move") {
                        return;
                    }
                    // if we changed color of some target before, reset it
                    if (priorDragTarget && priorDragTarget != e.target) {
                        $(priorDragTarget).css('background-color', '');
                        priorDragTarget = null;
                    }
                    // find target, the source will drag into
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    var target = !cell ? null : _this.itemAt(cell.row);
                    // accept only edit links and valid items as drag target
                    var reject = !$(e.target).hasClass('s-EditLink') || !_this.canMoveUnder(dd.item, target);
                    if (reject) {
                        dd.helper.text("Can't move " + dd.item.Title + " here");
                    }
                    else {
                        dd.helper.text("Move " + dd.item.Title + " under " + $(e.target).text());
                        // change color of current drag target
                        $(e.target).css('background-color', '#ddeeee');
                        priorDragTarget = e.target;
                    }
                    // toggle class of helper to show relevant accept / reject icon
                    dd.helper.toggleClass('reject', reject);
                    // position helper next to current mouse position
                    dd.helper.css({ top: e.pageY + 5, left: e.pageX + 4 });
                });
                // this is called when drag is completed
                _this.slickGrid.onDragEnd.subscribe(function (e, dd) {
                    if (dd.mode != "move") {
                        return;
                    }
                    // prevent browser from changing url
                    e.preventDefault();
                    // clear indicator color and drag helper
                    priorDragTarget && $(priorDragTarget).css('background-color', '');
                    dd.helper.remove();
                    // determine target row
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    var item = dd.item;
                    var target = !cell ? null : _this.itemAt(cell.row);
                    // check again that this is valid drag target
                    if ($(e.target).hasClass('s-EditLink') && _this.canMoveUnder(item, target)) {
                        // this will move our primary drag source under new parent
                        var moveItem = function (onSuccess) {
                            BasicSamples.DragDropSampleService.Update({
                                EntityId: item.Id,
                                Entity: {
                                    ParentId: target.Id
                                }
                            }, onSuccess);
                        };
                        // if drag source has some children, need some confirmation
                        var children = _this.getChildren(dd.item);
                        if (children.length > 0) {
                            Q.confirm('Move its children alongside the item?', function () {
                                // if responded yes, moving item under new parent should be enough
                                moveItem(function () { return _this.refresh(); });
                            }, {
                                onNo: function () {
                                    // if responded no, children should move under old parent of item
                                    var oldParentId = item.ParentId == null ? null : item.ParentId;
                                    var moveNextChild = function (onSuccess) {
                                        var _this = this;
                                        if (children.length) {
                                            var x = children.shift();
                                            BasicSamples.DragDropSampleService.Update({
                                                EntityId: x.Id,
                                                Entity: {
                                                    ParentId: oldParentId || null
                                                }
                                            }, function () { return moveNextChild(onSuccess); }, {
                                                onError: function () { return _this.refresh(); }
                                            });
                                        }
                                        else
                                            onSuccess();
                                    };
                                    // first move item itself under new parent, 
                                    // then move its children under old parent one by one
                                    moveItem(function () { return moveNextChild(function () { return _this.refresh(); }); });
                                }
                            });
                        }
                        else {
                            // item has no children, just move it under new parent
                            moveItem(function () { return _this.refresh(); });
                        }
                    }
                    return false;
                });
                return _this;
            }
            DragDropSampleGrid.prototype.getColumnsKey = function () { return 'BasicSamples.DragDropSample'; };
            DragDropSampleGrid.prototype.getDialogType = function () { return BasicSamples.DragDropSampleDialog; };
            DragDropSampleGrid.prototype.getIdProperty = function () { return BasicSamples.DragDropSampleRow.idProperty; };
            DragDropSampleGrid.prototype.getLocalTextPrefix = function () { return BasicSamples.DragDropSampleRow.localTextPrefix; };
            DragDropSampleGrid.prototype.getService = function () { return BasicSamples.DragDropSampleService.baseUrl; };
            /**
             * This method will determine if item can be moved under a given target
             * An item can't be moved under itself, under one of its children
             */
            DragDropSampleGrid.prototype.canMoveUnder = function (item, target) {
                if (!item || !target || item.Id == target.Id || item.ParentId == target.Id)
                    return false;
                if (Q.any(this.getParents(target), function (x) { return x.Id == item.Id; }))
                    return false;
                return true;
            };
            /**
             * Gets children list of an item
             */
            DragDropSampleGrid.prototype.getChildren = function (item) {
                return this.getItems().filter(function (x) { return x.ParentId == item.Id; });
            };
            /**
             * Gets all parents of an item
             */
            DragDropSampleGrid.prototype.getParents = function (item) {
                // use this to prevent infinite recursion
                var visited = {};
                var result = [];
                // while item has a parent and not visited yet
                while (item.ParentId && !visited[item.ParentId]) {
                    // find parent by its ID
                    item = this.view.getItemById(item.ParentId);
                    if (!item)
                        break;
                    result.push(item);
                    visited[item.Id] = true;
                }
                return result;
            };
            DragDropSampleGrid.prototype.getButtons = function () {
                return [];
            };
            DragDropSampleGrid.prototype.usePager = function () {
                return false;
            };
            DragDropSampleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DragDropSampleGrid);
            return DragDropSampleGrid;
        }(Serenity.EntityGrid));
        BasicSamples.DragDropSampleGrid = DragDropSampleGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var SelectableEntityGrid = /** @class */ (function (_super) {
        __extends(SelectableEntityGrid, _super);
        function SelectableEntityGrid() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SelectableEntityGrid.prototype.getSlickOptions = function () {
            var opt = _super.prototype.getSlickOptions.call(this);
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            opt.enableCellNavigation = true;
            return opt;
        };
        SelectableEntityGrid.prototype.createSlickGrid = function () {
            var grid = _super.prototype.createSlickGrid.call(this);
            grid.setSelectionModel(new Slick.RowSelectionModel());
            return grid;
        };
        SelectableEntityGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SelectableEntityGrid);
        return SelectableEntityGrid;
    }(Serenity.EntityGrid));
    AbidzarFrm.SelectableEntityGrid = SelectableEntityGrid;
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="SelectableEntityGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var RowSelectionGrid = /** @class */ (function (_super) {
            __extends(RowSelectionGrid, _super);
            function RowSelectionGrid(container) {
                return _super.call(this, container) || this;
            }
            RowSelectionGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            RowSelectionGrid.prototype.getDialogType = function () { return AbidzarFrm.Northwind.SupplierDialog; };
            RowSelectionGrid.prototype.getIdProperty = function () { return AbidzarFrm.Northwind.SupplierRow.idProperty; };
            RowSelectionGrid.prototype.getLocalTextPrefix = function () { return AbidzarFrm.Northwind.SupplierRow.localTextPrefix; };
            RowSelectionGrid.prototype.getService = function () { return AbidzarFrm.Northwind.SupplierService.baseUrl; };
            RowSelectionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RowSelectionGrid);
            return RowSelectionGrid;
        }(AbidzarFrm.SelectableEntityGrid));
        BasicSamples.RowSelectionGrid = RowSelectionGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var GridFilteredByCriteria = /** @class */ (function (_super) {
            __extends(GridFilteredByCriteria, _super);
            function GridFilteredByCriteria(container) {
                return _super.call(this, container) || this;
            }
            GridFilteredByCriteria.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['UnitsInStock'], '>', 10], [['CategoryName'], '!=', 'Condiments'], [['Discontinued'], '=', 0]);
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '>', 10] (which means string 'A' is greater than 10
                return true;
            };
            GridFilteredByCriteria = __decorate([
                Serenity.Decorators.registerClass()
            ], GridFilteredByCriteria);
            return GridFilteredByCriteria;
        }(AbidzarFrm.Northwind.ProductGrid));
        BasicSamples.GridFilteredByCriteria = GridFilteredByCriteria;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var GroupingAndSummariesInGrid = /** @class */ (function (_super) {
            __extends(GroupingAndSummariesInGrid, _super);
            function GroupingAndSummariesInGrid(container) {
                return _super.call(this, container) || this;
            }
            GroupingAndSummariesInGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Avg("UnitPrice" /* UnitPrice */),
                        new Slick.Aggregators.Sum("UnitsInStock" /* UnitsInStock */),
                        new Slick.Aggregators.Max("UnitsOnOrder" /* UnitsOnOrder */),
                        new Slick.Aggregators.Avg("ReorderLevel" /* ReorderLevel */)
                    ]
                });
                return grid;
            };
            GroupingAndSummariesInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field === "UnitsOnOrder" /* UnitsOnOrder */; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');
                };
                Q.first(columns, function (x) { return x.field === "ReorderLevel" /* ReorderLevel */; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.avg ? ('avg: ' + Q.coalesce(Q.formatNumber(totals.avg[col.field], '0.'), '')) : '');
                };
                return columns;
            };
            GroupingAndSummariesInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            GroupingAndSummariesInGrid.prototype.usePager = function () {
                return false;
            };
            GroupingAndSummariesInGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Group By Category',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                getter: "CategoryName" /* CategoryName */
                            }]); }
                    },
                    {
                        title: 'Group By Category and Supplier',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                formatter: function (x) { return 'Category: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: "CategoryName" /* CategoryName */
                            }, {
                                formatter: function (x) { return 'Supplier: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: "SupplierCompanyName" /* SupplierCompanyName */
                            }]); }
                    }, {
                        title: 'No Grouping',
                        cssClass: 'collapse-all-button',
                        onClick: function () { return _this.view.setGrouping([]); }
                    }];
            };
            GroupingAndSummariesInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GroupingAndSummariesInGrid);
            return GroupingAndSummariesInGrid;
        }(AbidzarFrm.Northwind.ProductGrid));
        BasicSamples.GroupingAndSummariesInGrid = GroupingAndSummariesInGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var InitialValuesForQuickFilters = /** @class */ (function (_super) {
            __extends(InitialValuesForQuickFilters, _super);
            function InitialValuesForQuickFilters(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of quick filters to be created for this grid.
             * By default, it returns quick filter objects corresponding to properties that
             * have a [QuickFilter] attribute at server side OrderColumns.cs
             */
            InitialValuesForQuickFilters.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                // quick filter init method is a good place to set initial
                // value for a quick filter editor, just after it is created
                Q.first(filters, function (x) { return x.field == "OrderDate" /* OrderDate */; }).init = function (w) {
                    // w is a reference to the editor for this quick filter widget
                    // here we cast it to DateEditor, and set its value as date.
                    // note that in Javascript, months are 0 based, so date below
                    // is actually 2016-05-01
                    w.valueAsDate = new Date(2016, 4, 1);
                    // setting start date was simple. but this quick filter is actually
                    // a combination of two date editors. to get reference to second one,
                    // need to find its next sibling element by its class
                    var endDate = w.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                    endDate.valueAsDate = new Date(2016, 6, 1);
                };
                Q.first(filters, function (x) { return x.field == "ShippingState" /* ShippingState */; }).init = function (w) {
                    // enum editor has a string value, so need to call toString()
                    w.value = AbidzarFrm.Northwind.OrderShippingState.NotShipped.toString();
                };
                return filters;
            };
            /**
             * This method is another possible place to modify quick filter widgets.
             * It is where the quick filter widgets are actually created.
             *
             * By default, it calls getQuickFilters() then renders UI for these
             * quick filters.
             *
             * We could use getQuickFilters() method for ShipVia too,
             * but this is for demonstration purposes
             */
            InitialValuesForQuickFilters.prototype.createQuickFilters = function () {
                // let base class to create quick filters first
                _super.prototype.createQuickFilters.call(this);
                // find a quick filter widget by its field name
                this.findQuickFilter(Serenity.LookupEditor, "ShipVia" /* ShipVia */).values = ["1", "2"];
            };
            InitialValuesForQuickFilters = __decorate([
                Serenity.Decorators.registerClass()
            ], InitialValuesForQuickFilters);
            return InitialValuesForQuickFilters;
        }(AbidzarFrm.Northwind.OrderGrid));
        BasicSamples.InitialValuesForQuickFilters = InitialValuesForQuickFilters;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineActionGrid = /** @class */ (function (_super) {
            __extends(InlineActionGrid, _super);
            function InlineActionGrid(container) {
                return _super.call(this, container) || this;
            }
            InlineActionGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Details',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-details" title="view details"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(2, 0, {
                    field: 'New Order',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action new-order" title="new order"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            InlineActionGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            AbidzarFrm.Northwind.CustomerService.Delete({
                                EntityId: item.ID,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                    else if (target.hasClass('view-details')) {
                        this.editItem(item.ID);
                    }
                    else if (target.hasClass('new-order')) {
                        var dlg = new AbidzarFrm.Northwind.OrderDialog();
                        this.initDialog(dlg);
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: item.CustomerID
                        });
                    }
                }
            };
            InlineActionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InlineActionGrid);
            return InlineActionGrid;
        }(AbidzarFrm.Northwind.CustomerGrid));
        BasicSamples.InlineActionGrid = InlineActionGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageFormatter = /** @class */ (function () {
            function InlineImageFormatter() {
            }
            InlineImageFormatter.prototype.format = function (ctx) {
                var file = (this.fileProperty ? ctx.item[this.fileProperty] : ctx.value);
                if (!file || !file.length)
                    return "";
                var href = Q.resolveUrl("~/upload/" + file);
                if (this.thumb) {
                    var parts = file.split('.');
                    file = parts.slice(0, parts.length - 1).join('.') + '_t.jpg';
                }
                var src = Q.resolveUrl('~/upload/' + file);
                return "<a class=\"inline-image\" target='_blank' href=\"" + href + "\">" +
                    ("<img src=\"" + src + "\" style='max-height: 145px; max-width: 100%;' /></a>");
            };
            InlineImageFormatter.prototype.initializeColumn = function (column) {
                if (this.fileProperty) {
                    column.referencedFields = column.referencedFields || [];
                    column.referencedFields.push(this.fileProperty);
                }
            };
            __decorate([
                Serenity.Decorators.option()
            ], InlineImageFormatter.prototype, "fileProperty", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], InlineImageFormatter.prototype, "thumb", void 0);
            InlineImageFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], InlineImageFormatter);
            return InlineImageFormatter;
        }());
        BasicSamples.InlineImageFormatter = InlineImageFormatter;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageInGrid = /** @class */ (function (_super) {
            __extends(InlineImageInGrid, _super);
            function InlineImageInGrid(container) {
                return _super.call(this, container) || this;
            }
            InlineImageInGrid.prototype.getColumnsKey = function () { return "BasicSamples.InlineImageInGrid"; };
            InlineImageInGrid.prototype.getDialogType = function () { return AbidzarFrm.Northwind.ProductDialog; };
            InlineImageInGrid.prototype.getIdProperty = function () { return AbidzarFrm.Northwind.ProductRow.idProperty; };
            InlineImageInGrid.prototype.getLocalTextPrefix = function () { return AbidzarFrm.Northwind.ProductRow.localTextPrefix; };
            InlineImageInGrid.prototype.getService = function () { return AbidzarFrm.Northwind.ProductService.baseUrl; };
            InlineImageInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 150;
                return opt;
            };
            InlineImageInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InlineImageInGrid);
            return InlineImageInGrid;
        }(Serenity.EntityGrid));
        BasicSamples.InlineImageInGrid = InlineImageInGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportDialog = /** @class */ (function (_super) {
            __extends(ProductExcelImportDialog, _super);
            function ProductExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.ProductExcelImportForm(_this.idPrefix);
                return _this;
            }
            ProductExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            ProductExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            BasicSamples.ProductExcelImportService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            ProductExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductExcelImportDialog);
            return ProductExcelImportDialog;
        }(Serenity.PropertyDialog));
        BasicSamples.ProductExcelImportDialog = ProductExcelImportDialog;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportGrid = /** @class */ (function (_super) {
            __extends(ProductExcelImportGrid, _super);
            function ProductExcelImportGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of buttons to be created.
             */
            ProductExcelImportGrid.prototype.getButtons = function () {
                var _this = this;
                // call base method to get list of buttons
                var buttons = _super.prototype.getButtons.call(this);
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new BasicSamples.ProductExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            ProductExcelImportGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductExcelImportGrid);
            return ProductExcelImportGrid;
        }(AbidzarFrm.Northwind.ProductGrid));
        BasicSamples.ProductExcelImportGrid = ProductExcelImportGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var QuickFilterCustomization = /** @class */ (function (_super) {
            __extends(QuickFilterCustomization, _super);
            function QuickFilterCustomization(container) {
                return _super.call(this, container) || this;
            }
            QuickFilterCustomization.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            QuickFilterCustomization.prototype.getDialogType = function () { return AbidzarFrm.Northwind.OrderDialog; };
            QuickFilterCustomization.prototype.getIdProperty = function () { return AbidzarFrm.Northwind.OrderRow.idProperty; };
            QuickFilterCustomization.prototype.getLocalTextPrefix = function () { return AbidzarFrm.Northwind.OrderRow.localTextPrefix; };
            QuickFilterCustomization.prototype.getService = function () { return AbidzarFrm.Northwind.OrderService.baseUrl; };
            /**
             * This method is called to get list of quick filters to be created for this grid.
             * By default, it returns quick filter objects corresponding to properties that
             * have a [QuickFilter] attribute at server side OrderColumns.cs
             */
            QuickFilterCustomization.prototype.getQuickFilters = function () {
                // get quick filter list from base class, e.g. columns
                var filters = _super.prototype.getQuickFilters.call(this);
                // we start by turning CustomerID filter to a Not Equal one
                var filter = Q.first(filters, function (x) { return x.field == "CustomerID" /* CustomerID */; });
                filter.title = "Customer Not Equal To";
                filter.handler = function (h) {
                    // if filter is active, e.g. editor has some value
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["CustomerID" /* CustomerID */], '!=', h.value]);
                    }
                };
                // turn order date filter to exact match, not a range
                filter = Q.first(filters, function (x) { return x.field == "OrderDate" /* OrderDate */; });
                filter.title = "Order Date Is Exactly";
                // element method in DataGrid turns this into a range editor, clear it to prevent
                filter.element = function (e) { };
                // need to override handler too, otherwise default handler will try to handle a date range
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.EqualityFilter["OrderDate" /* OrderDate */] = h.value;
                    }
                    else {
                        h.request.EqualityFilter["OrderDate" /* OrderDate */] = null;
                    }
                };
                // reset these as they also expect range editors
                filter.loadState = null;
                filter.saveState = null;
                filter.displayText = null;
                // make employee filter a textbox, instead of lookup, and search by starts with
                filter = Q.first(filters, function (x) { return x.field == "EmployeeID" /* EmployeeID */; });
                filter.title = "Employee Name Starts With";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["EmployeeFullName" /* EmployeeFullName */], 'like', h.value + '%']);
                    }
                };
                // turn shipping state into a boolean filter
                filter = Q.first(filters, function (x) { return x.field == "ShippingState" /* ShippingState */; });
                filter.title = "Show Only Shipped";
                filter.type = Serenity.BooleanEditor;
                filter.handler = function (h) {
                    h.active = !!h.value;
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, ['is not null', ["ShippedDate" /* ShippedDate */]]);
                    }
                };
                // ship via filters by NOT IN
                filter = Q.first(filters, function (x) { return x.field == "ShipVia" /* ShipVia */; });
                filter.title = "Ship Via Not IN";
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["ShipVia" /* ShipVia */], 'not in', [h.value]]);
                    }
                };
                // ship country filters by NOT contains
                filter = Q.first(filters, function (x) { return x.field == "ShipCountry" /* ShipCountry */; });
                filter.title = "Ship Country NOT Contains";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["ShipCountry" /* ShipCountry */], 'not like', '%' + h.value + '%']);
                    }
                };
                // ship city filters by GREATER THAN (>)
                filter = Q.first(filters, function (x) { return x.field == "ShipCity" /* ShipCity */; });
                filter.title = "Ship City Greater Than";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["ShipCity" /* ShipCity */], '>', h.value]);
                    }
                };
                // create a range editor for freight
                var endFreight = null;
                filters.push({
                    field: "Freight" /* Freight */,
                    type: Serenity.DecimalEditor,
                    title: 'Freight Between',
                    element: function (e1) {
                        e1.css("width", "80px");
                        endFreight = Serenity.Widget.create({
                            type: Serenity.DecimalEditor,
                            element: function (e2) { return e2.insertAfter(e1).css("width", "80px"); }
                        });
                        endFreight.element.change(function (x) { return e1.triggerHandler("change"); });
                        $("<span/>").addClass("range-separator").text("-").insertAfter(e1);
                    },
                    handler: function (h) {
                        var active1 = h.value != null && !isNaN(h.value);
                        var active2 = endFreight.value != null && !isNaN(endFreight.value);
                        h.active = active1 || active2;
                        if (active1)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["Freight" /* Freight */], '>=', h.value]);
                        if (active2)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["Freight" /* Freight */], '<=', endFreight.value]);
                    }
                });
                return filters;
            };
            QuickFilterCustomization = __decorate([
                Serenity.Decorators.registerClass()
            ], QuickFilterCustomization);
            return QuickFilterCustomization;
        }(Serenity.EntityGrid));
        BasicSamples.QuickFilterCustomization = QuickFilterCustomization;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var RemovingAddButton = /** @class */ (function (_super) {
            __extends(RemovingAddButton, _super);
            function RemovingAddButton(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of buttons to be created.
             */
            RemovingAddButton.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            RemovingAddButton = __decorate([
                Serenity.Decorators.registerClass()
            ], RemovingAddButton);
            return RemovingAddButton;
        }(AbidzarFrm.Northwind.SupplierGrid));
        BasicSamples.RemovingAddButton = RemovingAddButton;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomerGrossSalesGrid = /** @class */ (function (_super) {
            __extends(CustomerGrossSalesGrid, _super);
            function CustomerGrossSalesGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            CustomerGrossSalesGrid.prototype.getColumnsKey = function () { return "BasicSamples.CustomerGrossSales"; };
            CustomerGrossSalesGrid.prototype.getIdProperty = function () { return "__id"; };
            CustomerGrossSalesGrid.prototype.getNameProperty = function () { return AbidzarFrm.Northwind.CustomerGrossSalesRow.nameProperty; };
            CustomerGrossSalesGrid.prototype.getLocalTextPrefix = function () { return AbidzarFrm.Northwind.CustomerGrossSalesRow.localTextPrefix; };
            CustomerGrossSalesGrid.prototype.getService = function () { return BasicSamples.CustomerGrossSalesService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            CustomerGrossSalesGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in CustomerGrossSalesRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            CustomerGrossSalesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = [];
                buttons.push(AbidzarFrm.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: BasicSamples.CustomerGrossSalesService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(AbidzarFrm.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrossSalesGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('GrossAmount')
                    ]
                });
                this.view.setGrouping([{
                        getter: 'ContactName'
                    }]);
                return grid;
            };
            CustomerGrossSalesGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            CustomerGrossSalesGrid.prototype.usePager = function () {
                return false;
            };
            CustomerGrossSalesGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                // we create a date-range quick filter, which is a composite
                // filter with two date time editors
                var orderDate = this.dateRangeQuickFilter('OrderDate', 'Order Date');
                // need to override its handler, as default date-range filter will set Criteria parameter of list request.
                // we need to set StartDate and EndDate custom parameters of our CustomerGrossSalesListRequest
                orderDate.handler = function (args) {
                    // args.widget here is the start date editor. value of a date editor is a ISO date string
                    var start = args.widget.value;
                    // to find end date editor, need to search it by its css class among siblings
                    var end = args.widget.element.nextAll('.s-DateEditor')
                        .getWidget(Serenity.DateEditor).value;
                    args.request.StartDate = start;
                    args.request.EndDate = end;
                    // active option controls when a filter editor looks active, e.g. its label is blueish
                    args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
                };
                filters.push(orderDate);
                return filters;
            };
            CustomerGrossSalesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrossSalesGrid);
            return CustomerGrossSalesGrid;
        }(Serenity.EntityGrid));
        BasicSamples.CustomerGrossSalesGrid = CustomerGrossSalesGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var TreeGrid = /** @class */ (function (_super) {
            __extends(TreeGrid, _super);
            function TreeGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.treeMixin = new Serenity.TreeGridMixin({
                    grid: _this,
                    // bring tree items initially collapsed
                    initialCollapse: function () { return true; },
                    // which column to place tree toggle / expand/collapse button
                    toggleField: "CustomerCompanyName" /* CustomerCompanyName */,
                    getParentId: function (x) {
                        // as we don't have parentId column here, we are cheating by using modulus 10 and 50
                        // e.g. order with ID 1605 will have parent 1600, order with ID 1613 will have parent 1610
                        var parentId = Math.floor(x.OrderID / 10) * 10;
                        if (parentId == x.OrderID) {
                            parentId = Math.floor(x.OrderID / 50) * 50;
                            // orders with ID 16050 and 17000 should have NULL parent
                            if (parentId == x.OrderID)
                                return null;
                        }
                        // if you had a ParentID column, you'd just return x.ParentID
                        return parentId;
                    }
                });
                return _this;
            }
            TreeGrid.prototype.usePager = function () {
                return false;
            };
            TreeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TreeGrid);
            return TreeGrid;
        }(AbidzarFrm.Northwind.OrderGrid));
        BasicSamples.TreeGrid = TreeGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var VSGalleryQAGrid = /** @class */ (function (_super) {
            __extends(VSGalleryQAGrid, _super);
            function VSGalleryQAGrid(container) {
                return _super.call(this, container) || this;
            }
            VSGalleryQAGrid.prototype.getColumnsKey = function () { return "BasicSamples.VSGalleryQA"; };
            VSGalleryQAGrid.prototype.getIdProperty = function () { return "ThreadId"; };
            VSGalleryQAGrid.prototype.getService = function () { return BasicSamples.VSGalleryQAService.baseUrl; };
            VSGalleryQAGrid.prototype.getButtons = function () {
                return [];
            };
            VSGalleryQAGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 250;
                return opt;
            };
            VSGalleryQAGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == 'Posts'; }).format = function (ctx) {
                    var posts = ctx.value;
                    if (!posts || !posts.length)
                        return "";
                    var i = 0;
                    var text = "<ul class='posts'>";
                    for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                        var post = posts_1[_i];
                        text += "<li class='" + (i++ % 2 == 0 ? 'even' : 'odd') + "'><h4>";
                        text += post.PostedByName + " - ";
                        text += Q.formatDate(post.PostedOn, 'g');
                        text += "</h4><pre>";
                        text += Q.htmlEncode(post.Message);
                        text += "</pre></li>";
                    }
                    text += "</ul>";
                    return text;
                };
                return columns;
            };
            VSGalleryQAGrid.prototype.getInitialTitle = function () {
                return null;
            };
            VSGalleryQAGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VSGalleryQAGrid);
            return VSGalleryQAGrid;
        }(Serenity.EntityGrid));
        BasicSamples.VSGalleryQAGrid = VSGalleryQAGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var ViewWithoutIDGrid = /** @class */ (function (_super) {
            __extends(ViewWithoutIDGrid, _super);
            function ViewWithoutIDGrid(container) {
                var _this = _super.call(this, container) || this;
                // this is our autoincrementing counter
                _this.nextId = 1;
                return _this;
            }
            ViewWithoutIDGrid.prototype.getColumnsKey = function () { return "Northwind.SalesByCategory"; };
            ViewWithoutIDGrid.prototype.getIdProperty = function () { return "__id"; };
            ViewWithoutIDGrid.prototype.getNameProperty = function () { return AbidzarFrm.Northwind.SalesByCategoryRow.nameProperty; };
            ViewWithoutIDGrid.prototype.getLocalTextPrefix = function () { return AbidzarFrm.Northwind.SalesByCategoryRow.localTextPrefix; };
            ViewWithoutIDGrid.prototype.getService = function () { return AbidzarFrm.Northwind.SalesByCategoryService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            ViewWithoutIDGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in SalesByCategoryRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            ViewWithoutIDGrid.prototype.getButtons = function () {
                return [];
            };
            ViewWithoutIDGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewWithoutIDGrid);
            return ViewWithoutIDGrid;
        }(Serenity.EntityGrid));
        BasicSamples.ViewWithoutIDGrid = ViewWithoutIDGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicSamples;
    (function (BasicSamples) {
        var WrappedHeadersGrid = /** @class */ (function (_super) {
            __extends(WrappedHeadersGrid, _super);
            function WrappedHeadersGrid(container) {
                return _super.call(this, container) || this;
            }
            WrappedHeadersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WrappedHeadersGrid);
            return WrappedHeadersGrid;
        }(AbidzarFrm.Northwind.OrderGrid));
        BasicSamples.WrappedHeadersGrid = WrappedHeadersGrid;
    })(BasicSamples = AbidzarFrm.BasicSamples || (AbidzarFrm.BasicSamples = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = AbidzarFrm.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = AbidzarFrm.LanguageList || (AbidzarFrm.LanguageList = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
/// <reference path="../Common/UserPreference/UserPreferenceStorage.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('AbidzarFrm');
        Q.Router.enabled = false;
        Serenity.EntityDialog.defaultLanguageList = AbidzarFrm.LanguageList.getValue;
        Serenity.DataGrid.defaultPersistanceStorage = new AbidzarFrm.Common.UserPreferenceStorage();
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = AbidzarFrm.ScriptInitialization || (AbidzarFrm.ScriptInitialization = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var Editor;
        (function (Editor) {
            var SendEmailTypeEditor = /** @class */ (function (_super) {
                __extends(SendEmailTypeEditor, _super);
                function SendEmailTypeEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    // add option accepts a key (id) value and display text value
                    _this.addOption("Role", "Role");
                    _this.addOption("Personality", "Personality");
                    return _this;
                }
                SendEmailTypeEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], SendEmailTypeEditor);
                return SendEmailTypeEditor;
            }(Serenity.Select2Editor));
            Editor.SendEmailTypeEditor = SendEmailTypeEditor;
            var JenisKelaminEditor = /** @class */ (function (_super) {
                __extends(JenisKelaminEditor, _super);
                function JenisKelaminEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("L", "Laki-laki");
                    _this.addOption("P", "Perempuan");
                    return _this;
                }
                JenisKelaminEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], JenisKelaminEditor);
                return JenisKelaminEditor;
            }(Serenity.Select2Editor));
            Editor.JenisKelaminEditor = JenisKelaminEditor;
            var AgamaEditor = /** @class */ (function (_super) {
                __extends(AgamaEditor, _super);
                function AgamaEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("A1", "Islam");
                    _this.addOption("A2", "Kristen");
                    _this.addOption("A1", "Katolik");
                    _this.addOption("A2", "Hindu");
                    _this.addOption("A1", "Buddha");
                    _this.addOption("A2", "Konghucu");
                    return _this;
                }
                AgamaEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], AgamaEditor);
                return AgamaEditor;
            }(Serenity.Select2Editor));
            Editor.AgamaEditor = AgamaEditor;
            var LevelAreaEditor = /** @class */ (function (_super) {
                __extends(LevelAreaEditor, _super);
                function LevelAreaEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("RT", "RT");
                    _this.addOption("RW", "RW");
                    return _this;
                }
                LevelAreaEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], LevelAreaEditor);
                return LevelAreaEditor;
            }(Serenity.Select2Editor));
            Editor.LevelAreaEditor = LevelAreaEditor;
            var TypePosisiIklanEditor = /** @class */ (function (_super) {
                __extends(TypePosisiIklanEditor, _super);
                function TypePosisiIklanEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("0", "Dashboard");
                    _this.addOption("1", "Informasi");
                    return _this;
                }
                TypePosisiIklanEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], TypePosisiIklanEditor);
                return TypePosisiIklanEditor;
            }(Serenity.Select2Editor));
            Editor.TypePosisiIklanEditor = TypePosisiIklanEditor;
            var DataStatusEditor = /** @class */ (function (_super) {
                __extends(DataStatusEditor, _super);
                function DataStatusEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("0", "Draft");
                    _this.addOption("1", "Request");
                    _this.addOption("2", "Verified");
                    _this.addOption("3", "Rejected");
                    return _this;
                }
                DataStatusEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], DataStatusEditor);
                return DataStatusEditor;
            }(Serenity.Select2Editor));
            Editor.DataStatusEditor = DataStatusEditor;
            var TypeSlideshowEditor = /** @class */ (function (_super) {
                __extends(TypeSlideshowEditor, _super);
                function TypeSlideshowEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("0", "Slide");
                    _this.addOption("1", "Horizonscroll");
                    return _this;
                }
                TypeSlideshowEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], TypeSlideshowEditor);
                return TypeSlideshowEditor;
            }(Serenity.Select2Editor));
            Editor.TypeSlideshowEditor = TypeSlideshowEditor;
            var StatusEditor = /** @class */ (function (_super) {
                __extends(StatusEditor, _super);
                function StatusEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("K", "Kawin");
                    _this.addOption("B", "Belum Kawin");
                    _this.addOption("J", "Janda");
                    return _this;
                }
                StatusEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], StatusEditor);
                return StatusEditor;
            }(Serenity.Select2Editor));
            Editor.StatusEditor = StatusEditor;
            var PekerjaanEditor = /** @class */ (function (_super) {
                __extends(PekerjaanEditor, _super);
                function PekerjaanEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("BRH", "Buruh");
                    _this.addOption("PNS", "Pegawai Negeri");
                    _this.addOption("PS", "Pegawai Swasta");
                    _this.addOption("BWU", "Wirausaha");
                    _this.addOption("MRT", "Mengurus Rumah Tangga");
                    _this.addOption("LLL", "Lain-Lain");
                    return _this;
                }
                PekerjaanEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], PekerjaanEditor);
                return PekerjaanEditor;
            }(Serenity.Select2Editor));
            Editor.PekerjaanEditor = PekerjaanEditor;
            var GolonganDarahEditor = /** @class */ (function (_super) {
                __extends(GolonganDarahEditor, _super);
                function GolonganDarahEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("O", "O");
                    _this.addOption("A", "A");
                    _this.addOption("AB", "AB");
                    _this.addOption("B", "B");
                    return _this;
                }
                GolonganDarahEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], GolonganDarahEditor);
                return GolonganDarahEditor;
            }(Serenity.Select2Editor));
            Editor.GolonganDarahEditor = GolonganDarahEditor;
            var WargaNegaraEditor = /** @class */ (function (_super) {
                __extends(WargaNegaraEditor, _super);
                function WargaNegaraEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("WNI", "WNI");
                    _this.addOption("WNA", "WNA");
                    return _this;
                }
                WargaNegaraEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], WargaNegaraEditor);
                return WargaNegaraEditor;
            }(Serenity.Select2Editor));
            Editor.WargaNegaraEditor = WargaNegaraEditor;
            var PendidikanEditor = /** @class */ (function (_super) {
                __extends(PendidikanEditor, _super);
                function PendidikanEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("SD", "SD");
                    _this.addOption("SMP", "SMP");
                    _this.addOption("SLTA", "SLTA");
                    _this.addOption("D1", "D1");
                    _this.addOption("D2", "D2");
                    _this.addOption("D3", "D3");
                    _this.addOption("S1", "S1");
                    _this.addOption("S2", "S2");
                    _this.addOption("S3", "S3");
                    return _this;
                }
                PendidikanEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], PendidikanEditor);
                return PendidikanEditor;
            }(Serenity.Select2Editor));
            Editor.PendidikanEditor = PendidikanEditor;
            var SelectEditor = /** @class */ (function (_super) {
                __extends(SelectEditor, _super);
                function SelectEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("", "Select");
                    return _this;
                }
                SelectEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], SelectEditor);
                return SelectEditor;
            }(Serenity.Select2Editor));
            Editor.SelectEditor = SelectEditor;
            var WarnaEditor = /** @class */ (function (_super) {
                __extends(WarnaEditor, _super);
                function WarnaEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("default", "Default");
                    _this.addOption("dark", "Dark");
                    _this.addOption("white", "White");
                    _this.addOption("green", "Green");
                    _this.addOption("red", "Red");
                    _this.addOption("yellow", "Yellow");
                    _this.addOption("blue", "Blue");
                    _this.addOption("purple", "Purple");
                    return _this;
                }
                WarnaEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], WarnaEditor);
                return WarnaEditor;
            }(Serenity.Select2Editor));
            Editor.WarnaEditor = WarnaEditor;
            var Sequens3Editor = /** @class */ (function (_super) {
                __extends(Sequens3Editor, _super);
                function Sequens3Editor(container) {
                    var _this = _super.call(this, container, null) || this;
                    for (var i = 1; i < 20; i++) {
                        var val = "";
                        if (i < 10) {
                            val = "00" + i.toString();
                        }
                        else {
                            val = "0" + i.toString();
                        }
                        _this.addOption(val, val);
                    }
                    return _this;
                }
                Sequens3Editor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], Sequens3Editor);
                return Sequens3Editor;
            }(Serenity.Select2Editor));
            Editor.Sequens3Editor = Sequens3Editor;
            var MonthSelectionEditor = /** @class */ (function (_super) {
                __extends(MonthSelectionEditor, _super);
                function MonthSelectionEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    for (var i = 1; i <= 12; i++)
                        _this.addOption(i.toString(), i.toString());
                    return _this;
                }
                MonthSelectionEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], MonthSelectionEditor);
                return MonthSelectionEditor;
            }(Serenity.Select2Editor));
            Editor.MonthSelectionEditor = MonthSelectionEditor;
            var YearSelectionEditor = /** @class */ (function (_super) {
                __extends(YearSelectionEditor, _super);
                function YearSelectionEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    var curYear = new Date().getFullYear();
                    var index = 0;
                    for (var t = curYear - 10; t <= curYear; t++)
                        _this.addOption(t.toString(), t.toString());
                    return _this;
                }
                YearSelectionEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], YearSelectionEditor);
                return YearSelectionEditor;
            }(Serenity.Select2Editor));
            Editor.YearSelectionEditor = YearSelectionEditor;
            var ProvinsiEditor = /** @class */ (function (_super) {
                __extends(ProvinsiEditor, _super);
                function ProvinsiEditor(hidden) {
                    var _this = _super.call(this, hidden, null) || this;
                    var items = Q.getLookup("Rukuntangga.Provinsi").items;
                    items.forEach(function (x, index) {
                        _super.prototype.addItem.call(_this, { id: x.Id.toString(), source: x.NamaProvinsi, text: x.NamaProvinsi, disabled: false });
                    });
                    return _this;
                }
                ProvinsiEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], ProvinsiEditor);
                return ProvinsiEditor;
            }(Serenity.Select2Editor));
            Editor.ProvinsiEditor = ProvinsiEditor;
            var KotaEditor = /** @class */ (function (_super) {
                __extends(KotaEditor, _super);
                function KotaEditor(hidden) {
                    var _this = _super.call(this, hidden, null) || this;
                    var items = Q.getLookup("Rukuntangga.Kota").items;
                    items.forEach(function (x, index) {
                        _super.prototype.addItem.call(_this, { id: x.Id.toString(), source: x.NamaKota, text: x.NamaKota, disabled: false });
                    });
                    return _this;
                }
                KotaEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], KotaEditor);
                return KotaEditor;
            }(Serenity.Select2Editor));
            Editor.KotaEditor = KotaEditor;
            var KecamatanEditor = /** @class */ (function (_super) {
                __extends(KecamatanEditor, _super);
                function KecamatanEditor(hidden) {
                    var _this = _super.call(this, hidden, null) || this;
                    var items = Q.getLookup("Rukuntangga.Kecamatan").items;
                    items.forEach(function (x, index) {
                        _super.prototype.addItem.call(_this, { id: x.Id.toString(), source: x.NamaKecamatan, text: x.NamaKecamatan, disabled: false });
                    });
                    return _this;
                }
                KecamatanEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], KecamatanEditor);
                return KecamatanEditor;
            }(Serenity.Select2Editor));
            Editor.KecamatanEditor = KecamatanEditor;
            var KelurahanEditor = /** @class */ (function (_super) {
                __extends(KelurahanEditor, _super);
                function KelurahanEditor(hidden) {
                    var _this = _super.call(this, hidden, null) || this;
                    var items = Q.getLookup("Rukuntangga.Kelurahan").items;
                    items.forEach(function (x, index) {
                        _super.prototype.addItem.call(_this, { id: x.Id.toString(), source: x.NamaKelurahan, text: x.NamaKelurahan, disabled: false });
                    });
                    return _this;
                }
                KelurahanEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], KelurahanEditor);
                return KelurahanEditor;
            }(Serenity.Select2Editor));
            Editor.KelurahanEditor = KelurahanEditor;
            var JabatanEditor = /** @class */ (function (_super) {
                __extends(JabatanEditor, _super);
                function JabatanEditor(hidden) {
                    var _this = _super.call(this, hidden, null) || this;
                    var items = Q.getLookup("Rukuntangga.Jabatan").items;
                    items.forEach(function (x, index) {
                        _super.prototype.addItem.call(_this, { id: x.Id.toString(), source: x.NamaJabatan, text: x.NamaJabatan, disabled: false });
                    });
                    return _this;
                }
                JabatanEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], JabatanEditor);
                return JabatanEditor;
            }(Serenity.Select2Editor));
            Editor.JabatanEditor = JabatanEditor;
            var TransactionDocumentCodeEditor = /** @class */ (function (_super) {
                __extends(TransactionDocumentCodeEditor, _super);
                function TransactionDocumentCodeEditor(hidden) {
                    var _this = _super.call(this, hidden, null) || this;
                    var items = Q.getLookup("Rukuntangga.TransactionDocumentCode").items;
                    items.forEach(function (x, index) {
                        _super.prototype.addItem.call(_this, { id: x.DocumentCode.toString(), source: x.DocumentCode, text: x.DocumentCode, disabled: false });
                    });
                    return _this;
                }
                TransactionDocumentCodeEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], TransactionDocumentCodeEditor);
                return TransactionDocumentCodeEditor;
            }(Serenity.Select2Editor));
            Editor.TransactionDocumentCodeEditor = TransactionDocumentCodeEditor;
            var EmailTemplateEditor = /** @class */ (function (_super) {
                __extends(EmailTemplateEditor, _super);
                function EmailTemplateEditor(hidden) {
                    var _this = _super.call(this, hidden, null) || this;
                    var items = Q.getLookup("Rukuntangga.EmailTemplate").items;
                    items.forEach(function (x, index) {
                        _super.prototype.addItem.call(_this, { id: x.KodeTemplate.toString(), source: x.KodeTemplate, text: x.KodeTemplate, disabled: false });
                    });
                    return _this;
                }
                EmailTemplateEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], EmailTemplateEditor);
                return EmailTemplateEditor;
            }(Serenity.Select2Editor));
            Editor.EmailTemplateEditor = EmailTemplateEditor;
            var AdministrationRoleEditor = /** @class */ (function (_super) {
                __extends(AdministrationRoleEditor, _super);
                function AdministrationRoleEditor(hidden) {
                    var _this = _super.call(this, hidden, null) || this;
                    var items = Q.getLookup("Administration.Role").items;
                    items.forEach(function (x, index) {
                        _super.prototype.addItem.call(_this, { id: x.RoleName, source: x.RoleName, text: x.RoleName, disabled: false });
                    });
                    return _this;
                }
                AdministrationRoleEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], AdministrationRoleEditor);
                return AdministrationRoleEditor;
            }(Serenity.Select2Editor));
            Editor.AdministrationRoleEditor = AdministrationRoleEditor;
            var TransactionStatusEditor = /** @class */ (function (_super) {
                __extends(TransactionStatusEditor, _super);
                function TransactionStatusEditor(hidden) {
                    var _this = _super.call(this, hidden, null) || this;
                    var items = Q.getLookup("Rukuntangga.TransactionStatus").items;
                    items.forEach(function (x, index) {
                        _super.prototype.addItem.call(_this, { id: x.Code, source: x.Internal, text: x.Internal, disabled: false });
                    });
                    return _this;
                }
                TransactionStatusEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], TransactionStatusEditor);
                return TransactionStatusEditor;
            }(Serenity.Select2Editor));
            Editor.TransactionStatusEditor = TransactionStatusEditor;
            var YesNoEditor = /** @class */ (function (_super) {
                __extends(YesNoEditor, _super);
                function YesNoEditor(container) {
                    var _this = _super.call(this, container, null) || this;
                    _this.addOption("1", "YES");
                    _this.addOption("0", "NO");
                    return _this;
                }
                YesNoEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
                ], YesNoEditor);
                return YesNoEditor;
            }(Serenity.Select2Editor));
            Editor.YesNoEditor = YesNoEditor;
        })(Editor = Common.Editor || (Common.Editor = {}));
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var Formatter;
        (function (Formatter) {
            var TypePosisiIklanFormatter = /** @class */ (function () {
                function TypePosisiIklanFormatter() {
                }
                TypePosisiIklanFormatter.prototype.format = function (ctx) {
                    var result = ctx.value;
                    switch (ctx.value) {
                        case "0":
                            result = "Dashboard";
                            break;
                        case "1":
                            result = "Informasi";
                            break;
                    }
                    return result;
                };
                TypePosisiIklanFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], TypePosisiIklanFormatter);
                return TypePosisiIklanFormatter;
            }());
            Formatter.TypePosisiIklanFormatter = TypePosisiIklanFormatter;
            var TypeSlideshowFormatter = /** @class */ (function () {
                function TypeSlideshowFormatter() {
                }
                TypeSlideshowFormatter.prototype.format = function (ctx) {
                    var result = ctx.value;
                    switch (ctx.value) {
                        case "0":
                            result = "Slide";
                            break;
                        case "1":
                            result = "Horizonscroll";
                            break;
                    }
                    return result;
                };
                TypeSlideshowFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], TypeSlideshowFormatter);
                return TypeSlideshowFormatter;
            }());
            Formatter.TypeSlideshowFormatter = TypeSlideshowFormatter;
            var DataStatusFormatter = /** @class */ (function () {
                function DataStatusFormatter() {
                }
                DataStatusFormatter.prototype.format = function (ctx) {
                    var result = ctx.value;
                    var classStatus = '';
                    switch (ctx.value) {
                        case 0:
                            result = "Draft";
                            classStatus = 'label label-warning';
                            break;
                        case 1:
                            result = "Request";
                            classStatus = 'label label-default';
                            break;
                        case 2:
                            result = "Verified";
                            classStatus = 'label label-success';
                            break;
                        case 3:
                            result = "Rejected";
                            classStatus = 'label label-danger';
                            break;
                    }
                    return '<span class="' + classStatus + '">' + Q.htmlEncode(result) + '</span>';
                };
                DataStatusFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], DataStatusFormatter);
                return DataStatusFormatter;
            }());
            Formatter.DataStatusFormatter = DataStatusFormatter;
            var ProvinsiFormatter = /** @class */ (function () {
                function ProvinsiFormatter() {
                }
                ProvinsiFormatter.prototype.format = function (ctx) {
                    var byId = AbidzarFrm.Rukuntangga.TbProvinsiRow.getLookup().itemById;
                    if (byId[ctx.value] != null) {
                        return byId[ctx.value].NamaProvinsi;
                    }
                    else {
                        return ctx.value;
                    }
                };
                ProvinsiFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], ProvinsiFormatter);
                return ProvinsiFormatter;
            }());
            Formatter.ProvinsiFormatter = ProvinsiFormatter;
            var KotaFormatter = /** @class */ (function () {
                function KotaFormatter() {
                }
                KotaFormatter.prototype.format = function (ctx) {
                    var byId = AbidzarFrm.Rukuntangga.TbKotaRow.getLookup().itemById;
                    if (byId[ctx.value] != null) {
                        return byId[ctx.value].NamaKota;
                    }
                    else {
                        return ctx.value;
                    }
                };
                KotaFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], KotaFormatter);
                return KotaFormatter;
            }());
            Formatter.KotaFormatter = KotaFormatter;
            var KecamatanFormatter = /** @class */ (function () {
                function KecamatanFormatter() {
                }
                KecamatanFormatter.prototype.format = function (ctx) {
                    var byId = AbidzarFrm.Rukuntangga.TbKecamatanRow.getLookup().itemById;
                    if (byId[ctx.value] != null) {
                        return byId[ctx.value].NamaKecamatan;
                    }
                    else {
                        return ctx.value;
                    }
                };
                KecamatanFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], KecamatanFormatter);
                return KecamatanFormatter;
            }());
            Formatter.KecamatanFormatter = KecamatanFormatter;
            var KelurahanFormatter = /** @class */ (function () {
                function KelurahanFormatter() {
                }
                KelurahanFormatter.prototype.format = function (ctx) {
                    var byId = AbidzarFrm.Rukuntangga.TbKelurahanRow.getLookup().itemById;
                    if (byId[ctx.value] != null) {
                        return byId[ctx.value].NamaKelurahan;
                    }
                    else {
                        return ctx.value;
                    }
                };
                KelurahanFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], KelurahanFormatter);
                return KelurahanFormatter;
            }());
            Formatter.KelurahanFormatter = KelurahanFormatter;
            var JabatanFormatter = /** @class */ (function () {
                function JabatanFormatter() {
                }
                JabatanFormatter.prototype.format = function (ctx) {
                    var byId = AbidzarFrm.Rukuntangga.TbJabatanRow.getLookup().itemById;
                    if (byId[ctx.value] != null) {
                        return byId[ctx.value].NamaJabatan;
                    }
                    else {
                        return ctx.value;
                    }
                };
                JabatanFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], JabatanFormatter);
                return JabatanFormatter;
            }());
            Formatter.JabatanFormatter = JabatanFormatter;
            var NamaKtpFormatter = /** @class */ (function () {
                function NamaKtpFormatter() {
                }
                NamaKtpFormatter.prototype.format = function (ctx) {
                    var data = AbidzarFrm.Rukuntangga.TbKtpRow.getLookup().items.filter(function (x) { return x.Nik == ctx.value; });
                    if (data.length > 0) {
                        return data[0].Nama;
                    }
                    else {
                        return ctx.value;
                    }
                };
                NamaKtpFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], NamaKtpFormatter);
                return NamaKtpFormatter;
            }());
            Formatter.NamaKtpFormatter = NamaKtpFormatter;
            var YesNoFormatter = /** @class */ (function () {
                function YesNoFormatter() {
                }
                YesNoFormatter.prototype.format = function (ctx) {
                    var classCheck = '';
                    switch (ctx.value) {
                        case 0:
                            classCheck = 'check-box';
                            break;
                        case 1:
                            classCheck = 'check-box checked';
                            break;
                    }
                    return '<span class="' + classCheck + '"></span>';
                };
                YesNoFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], YesNoFormatter);
                return YesNoFormatter;
            }());
            Formatter.YesNoFormatter = YesNoFormatter;
        })(Formatter = Common.Formatter || (Common.Formatter = {}));
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    AbidzarFrm.BasicProgressDialog = BasicProgressDialog;
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = AbidzarFrm.DialogUtils || (AbidzarFrm.DialogUtils = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: Q.coalesce(options.title, 'export-xlsx-button'),
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    AbidzarFrm.StaticTextBlock = StaticTextBlock;
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = AbidzarFrm.Common || (AbidzarFrm.Common = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = AbidzarFrm.Membership || (AbidzarFrm.Membership = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = AbidzarFrm.Membership || (AbidzarFrm.Membership = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = AbidzarFrm.Membership || (AbidzarFrm.Membership = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = AbidzarFrm.Membership || (AbidzarFrm.Membership = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CustomerEditor = /** @class */ (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CustomerEditor.prototype.getLookupKey = function () {
                return Northwind.CustomerRow.lookupKey;
            };
            CustomerEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
            };
            CustomerEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CustomerEditor);
            return CustomerEditor;
        }(Serenity.LookupEditorBase));
        Northwind.CustomerEditor = CustomerEditor;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../Order/OrderDialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrderDialog = /** @class */ (function (_super) {
            __extends(CustomerOrderDialog, _super);
            function CustomerOrderDialog() {
                return _super.call(this) || this;
            }
            CustomerOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
            };
            CustomerOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrderDialog);
            return CustomerOrderDialog;
        }(Northwind.OrderDialog));
        Northwind.CustomerOrderDialog = CustomerOrderDialog;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../Order/OrderGrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrdersGrid = /** @class */ (function (_super) {
            __extends(CustomerOrdersGrid, _super);
            function CustomerOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerOrdersGrid.prototype.getDialogType = function () { return Northwind.CustomerOrderDialog; };
            CustomerOrdersGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== "CustomerCompanyName" /* CustomerCompanyName */; });
            };
            CustomerOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CustomerOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerID: this.customerID });
            };
            CustomerOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerOrdersGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID !== value) {
                        this._customerID = value;
                        this.setEquality('CustomerID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CustomerOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrdersGrid);
            return CustomerOrdersGrid;
        }(Northwind.OrderGrid));
        Northwind.CustomerOrdersGrid = CustomerOrdersGrid;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var EmployeeListFormatter = /** @class */ (function () {
            function EmployeeListFormatter() {
            }
            EmployeeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Northwind.EmployeeRow.getLookup().itemById;
                var z;
                return Q.htmlEncode(idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", "));
            };
            EmployeeListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EmployeeListFormatter);
            return EmployeeListFormatter;
        }());
        Northwind.EmployeeListFormatter = EmployeeListFormatter;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var EmployeeFormatter = /** @class */ (function () {
            function EmployeeFormatter() {
            }
            EmployeeFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === Northwind.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            EmployeeFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            __decorate([
                Serenity.Decorators.option()
            ], EmployeeFormatter.prototype, "genderProperty", void 0);
            EmployeeFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
            ], EmployeeFormatter);
            return EmployeeFormatter;
        }());
        Northwind.EmployeeFormatter = EmployeeFormatter;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var NoteDialog = /** @class */ (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                return _this;
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        Northwind.NoteDialog = NoteDialog;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var NotesEditor = /** @class */ (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(item.InsertDate, 'g'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: AbidzarFrm.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            NotesEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], NotesEditor);
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        Northwind.NotesEditor = NotesEditor;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var FreightFormatter = /** @class */ (function () {
            function FreightFormatter() {
            }
            FreightFormatter.prototype.format = function (ctx) {
                return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            FreightFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], FreightFormatter);
            return FreightFormatter;
        }());
        Northwind.FreightFormatter = FreightFormatter;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var RegionDialog = /** @class */ (function (_super) {
            __extends(RegionDialog, _super);
            function RegionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.RegionForm(_this.idPrefix);
                return _this;
            }
            RegionDialog.prototype.getFormKey = function () { return Northwind.RegionForm.formKey; };
            RegionDialog.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionDialog.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionDialog.prototype.getNameProperty = function () { return Northwind.RegionRow.nameProperty; };
            RegionDialog.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionDialog.prototype.getLanguages = function () {
                return AbidzarFrm.LanguageList.getValue();
            };
            RegionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionDialog);
            return RegionDialog;
        }(Serenity.EntityDialog));
        Northwind.RegionDialog = RegionDialog;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var RegionGrid = /** @class */ (function (_super) {
            __extends(RegionGrid, _super);
            function RegionGrid(container) {
                return _super.call(this, container) || this;
            }
            RegionGrid.prototype.getColumnsKey = function () { return "Northwind.Region"; };
            RegionGrid.prototype.getDialogType = function () { return Northwind.RegionDialog; };
            RegionGrid.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionGrid.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionGrid.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionGrid);
            return RegionGrid;
        }(Serenity.EntityGrid));
        Northwind.RegionGrid = RegionGrid;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var PhoneEditor = /** @class */ (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(input) {
                var _this = _super.call(this, input) || this;
                _this.addValidationRule(_this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return PhoneEditor_1.validate(value, _this.multiple);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
                return _this;
            }
            PhoneEditor_1 = PhoneEditor;
            PhoneEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            PhoneEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                if (this.multiple) {
                    return PhoneEditor_1.formatMulti(value, PhoneEditor_1.formatPhone);
                }
                return PhoneEditor_1.formatPhone(value);
            };
            PhoneEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            PhoneEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            PhoneEditor.validate = function (phone, isMultiple) {
                var valid = (isMultiple ? PhoneEditor_1.isValidMulti(phone, PhoneEditor_1.isValidPhone) : PhoneEditor_1.isValidPhone(phone));
                if (valid) {
                    return null;
                }
                return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
            };
            PhoneEditor.isValidPhone = function (phone) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                if (phone.length < 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                    phone = phone.substr(1, 3) + phone.substring(5);
                }
                if (phone.length !== 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    return false;
                }
                for (var i = 0; i < phone.length; i++) {
                    var c = phone.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            PhoneEditor.formatPhone = function (phone) {
                if (!PhoneEditor_1.isValidPhone(phone)) {
                    return phone;
                }
                phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return phone;
            };
            PhoneEditor.formatMulti = function (phone, format) {
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var result = '';
                for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                    var x = phones_1[_i];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (result.length > 0) {
                        result += ', ';
                    }
                    result += format(s);
                }
                return result;
            };
            PhoneEditor.isValidMulti = function (phone, check) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var anyValid = false;
                for (var $t1 = 0; $t1 < phones.length; $t1++) {
                    var x = phones[$t1];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (!check(s)) {
                        return false;
                    }
                    anyValid = true;
                }
                if (!anyValid) {
                    return false;
                }
                return true;
            };
            var PhoneEditor_1;
            __decorate([
                Serenity.Decorators.option()
            ], PhoneEditor.prototype, "multiple", void 0);
            PhoneEditor = PhoneEditor_1 = __decorate([
                Serenity.Decorators.registerEditor()
            ], PhoneEditor);
            return PhoneEditor;
        }(Serenity.StringEditor));
        Northwind.PhoneEditor = PhoneEditor;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ShipperDialog = /** @class */ (function (_super) {
            __extends(ShipperDialog, _super);
            function ShipperDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ShipperForm(_this.idPrefix);
                return _this;
            }
            ShipperDialog.prototype.getFormKey = function () { return Northwind.ShipperForm.formKey; };
            ShipperDialog.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperDialog.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperDialog.prototype.getNameProperty = function () { return Northwind.ShipperRow.nameProperty; };
            ShipperDialog.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperDialog.prototype.getLanguages = function () {
                return AbidzarFrm.LanguageList.getValue();
            };
            ShipperDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperDialog);
            return ShipperDialog;
        }(Serenity.EntityDialog));
        Northwind.ShipperDialog = ShipperDialog;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ShipperFormatter = /** @class */ (function () {
            function ShipperFormatter() {
            }
            ShipperFormatter.prototype.format = function (ctx) {
                return "<span class='shipper-symbol shipper-" +
                    Q.replaceAll((ctx.value || '').toString(), ' ', '') +
                    "'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            ShipperFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], ShipperFormatter);
            return ShipperFormatter;
        }());
        Northwind.ShipperFormatter = ShipperFormatter;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var ShipperGrid = /** @class */ (function (_super) {
            __extends(ShipperGrid, _super);
            function ShipperGrid(container) {
                return _super.call(this, container) || this;
            }
            ShipperGrid.prototype.getColumnsKey = function () { return "Northwind.Shipper"; };
            ShipperGrid.prototype.getDialogType = function () { return Northwind.ShipperDialog; };
            ShipperGrid.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperGrid.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperGrid.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperGrid);
            return ShipperGrid;
        }(Serenity.EntityGrid));
        Northwind.ShipperGrid = ShipperGrid;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var TerritoryDialog = /** @class */ (function (_super) {
            __extends(TerritoryDialog, _super);
            function TerritoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.TerritoryForm(_this.idPrefix);
                return _this;
            }
            TerritoryDialog.prototype.getFormKey = function () { return Northwind.TerritoryForm.formKey; };
            TerritoryDialog.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryDialog.prototype.getNameProperty = function () { return Northwind.TerritoryRow.nameProperty; };
            TerritoryDialog.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryDialog.prototype.getLanguages = function () {
                return AbidzarFrm.LanguageList.getValue();
            };
            TerritoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryDialog);
            return TerritoryDialog;
        }(Serenity.EntityDialog));
        Northwind.TerritoryDialog = TerritoryDialog;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Northwind;
    (function (Northwind) {
        var TerritoryGrid = /** @class */ (function (_super) {
            __extends(TerritoryGrid, _super);
            function TerritoryGrid(container) {
                return _super.call(this, container) || this;
            }
            TerritoryGrid.prototype.getColumnsKey = function () { return "Northwind.Territory"; };
            TerritoryGrid.prototype.getDialogType = function () { return Northwind.TerritoryDialog; };
            TerritoryGrid.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryGrid.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryGrid);
            return TerritoryGrid;
        }(Serenity.EntityGrid));
        Northwind.TerritoryGrid = TerritoryGrid;
    })(Northwind = AbidzarFrm.Northwind || (AbidzarFrm.Northwind = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var AppointmentDiaryDialog = /** @class */ (function (_super) {
            __extends(AppointmentDiaryDialog, _super);
            function AppointmentDiaryDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AppointmentDiaryDialog.prototype.getFormKey = function () { return Rukuntangga.AppointmentDiaryForm.formKey; };
            AppointmentDiaryDialog.prototype.getIdProperty = function () { return Rukuntangga.AppointmentDiaryRow.idProperty; };
            AppointmentDiaryDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.AppointmentDiaryRow.localTextPrefix; };
            AppointmentDiaryDialog.prototype.getNameProperty = function () { return Rukuntangga.AppointmentDiaryRow.nameProperty; };
            AppointmentDiaryDialog.prototype.getService = function () { return Rukuntangga.AppointmentDiaryService.baseUrl; };
            AppointmentDiaryDialog.prototype.getDeletePermission = function () { return Rukuntangga.AppointmentDiaryRow.insertPermission; };
            AppointmentDiaryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AppointmentDiaryDialog);
            return AppointmentDiaryDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.AppointmentDiaryDialog = AppointmentDiaryDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var AppointmentDiaryGrid = /** @class */ (function (_super) {
            __extends(AppointmentDiaryGrid, _super);
            function AppointmentDiaryGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AppointmentDiaryGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.AppointmentDiary'; };
            AppointmentDiaryGrid.prototype.getDialogType = function () { return Rukuntangga.AppointmentDiaryDialog; };
            AppointmentDiaryGrid.prototype.getIdProperty = function () { return Rukuntangga.AppointmentDiaryRow.idProperty; };
            AppointmentDiaryGrid.prototype.getInsertPermission = function () { return Rukuntangga.AppointmentDiaryRow.insertPermission; };
            AppointmentDiaryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AppointmentDiaryGrid);
            return AppointmentDiaryGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.AppointmentDiaryGrid = AppointmentDiaryGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbGaleryDialog = /** @class */ (function (_super) {
            __extends(TbGaleryDialog, _super);
            function TbGaleryDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbGaleryDialog.prototype.getFormKey = function () { return Rukuntangga.TbGaleryForm.formKey; };
            TbGaleryDialog.prototype.getIdProperty = function () { return Rukuntangga.TbGaleryRow.idProperty; };
            TbGaleryDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbGaleryRow.localTextPrefix; };
            TbGaleryDialog.prototype.getNameProperty = function () { return Rukuntangga.TbGaleryRow.nameProperty; };
            TbGaleryDialog.prototype.getService = function () { return Rukuntangga.TbGaleryService.baseUrl; };
            TbGaleryDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbGaleryRow.insertPermission; };
            TbGaleryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbGaleryDialog);
            return TbGaleryDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbGaleryDialog = TbGaleryDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../tbgalery/tbgalerydialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        /**
         * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
         */
        var Galery = /** @class */ (function (_super) {
            __extends(Galery, _super);
            function Galery() {
                var _this = _super.call(this) || this;
                _this.form = new Rukuntangga.TbGaleryForm(_this.idPrefix);
                return _this;
            }
            Galery.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
                this.saveAndCloseButton.hide();
            };
            Galery.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.element.find(jQuery(".Deskripsi")).hide();
                this.element.find(jQuery(".LevelArea")).hide();
                this.element.find(jQuery(".Thumbnail")).hide();
                this.element.find(jQuery(".delete")).hide();
                this.element.find(jQuery(".s-Toolbar")).hide();
                this.element.find(jQuery(".caption")).hide();
            };
            Galery.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
            };
            Galery = __decorate([
                Serenity.Decorators.panel()
            ], Galery);
            return Galery;
        }(Rukuntangga.TbGaleryDialog));
        Rukuntangga.Galery = Galery;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var VMRegistrationsRole;
        (function (VMRegistrationsRole) {
            VMRegistrationsRole.SA = 'SA';
            VMRegistrationsRole.RW = 'RW';
            VMRegistrationsRole.RT = 'RT';
            VMRegistrationsRole.WARGA = 'WARGA';
        })(VMRegistrationsRole = Rukuntangga.VMRegistrationsRole || (Rukuntangga.VMRegistrationsRole = {}));
        var StatusCode;
        (function (StatusCode) {
            StatusCode.Draft = 0;
            StatusCode.Requested = 1;
            StatusCode.Verified = 2;
            StatusCode.Rejected = 3;
        })(StatusCode = Rukuntangga.StatusCode || (Rukuntangga.StatusCode = {}));
        var TbKtpDialog = /** @class */ (function (_super) {
            __extends(TbKtpDialog, _super);
            function TbKtpDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Rukuntangga.TbKtpForm(_this.idPrefix);
                _this.form.IdProvinsi.changeSelect2(function (e) {
                    _this.form.IdKota.value = "";
                    _this.form.IdKecamatan.value = "";
                    _this.form.IdKelurahan.value = "";
                    _this.form.IdKota.items = [];
                    _this.form.IdKecamatan.items = [];
                    _this.form.IdKelurahan.items = [];
                    _this.SetKota();
                });
                _this.form.IdKota.changeSelect2(function (e) {
                    _this.form.IdKecamatan.value = "";
                    _this.form.IdKelurahan.value = "";
                    _this.form.IdKecamatan.items = [];
                    _this.form.IdKelurahan.items = [];
                    _this.SetKecamatan();
                });
                _this.form.IdKecamatan.changeSelect2(function (e) {
                    _this.form.IdKelurahan.value = "";
                    _this.form.IdKelurahan.items = [];
                    _this.SetKelurahan();
                });
                _this.form.IdProvinsiTinggal.changeSelect2(function (e) {
                    _this.form.IdKotaTinggal.value = "";
                    _this.form.IdKecamatanTinggal.value = "";
                    _this.form.IdKelurahanTinggal.value = "";
                    _this.form.IdKotaTinggal.items = [];
                    _this.form.IdKecamatanTinggal.items = [];
                    _this.form.IdKelurahanTinggal.items = [];
                    _this.SetKotaTinggal();
                });
                _this.form.IdKotaTinggal.changeSelect2(function (e) {
                    _this.form.IdKecamatanTinggal.value = "";
                    _this.form.IdKelurahanTinggal.value = "";
                    _this.form.IdKecamatanTinggal.items = [];
                    _this.form.IdKelurahanTinggal.items = [];
                    _this.SetKecamatanTinggal();
                });
                _this.form.IdKecamatanTinggal.changeSelect2(function (e) {
                    _this.form.IdKelurahanTinggal.value = "";
                    _this.form.IdKelurahanTinggal.items = [];
                    _this.SetKelurahanTinggal();
                });
                _this.form.StatusPerkawinan.changeSelect2(function (e) {
                    Serenity.EditorUtils.setRequired(_this.form.TanggalPerkawinan, _this.form.StatusPerkawinan.value == "K");
                });
                _this.form.TinggalSesuaiKtp.changeSelect2(function (e) {
                    var flag = false;
                    if (_this.form.TinggalSesuaiKtp.value == "0") {
                        flag = true;
                    }
                    _this.IsSameAddressWithKtp(flag);
                });
                return _this;
            }
            TbKtpDialog.prototype.getFormKey = function () { return Rukuntangga.TbKtpForm.formKey; };
            TbKtpDialog.prototype.getIdProperty = function () { return Rukuntangga.TbKtpRow.idProperty; };
            TbKtpDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbKtpRow.localTextPrefix; };
            TbKtpDialog.prototype.getNameProperty = function () { return Rukuntangga.TbKtpRow.nameProperty; };
            TbKtpDialog.prototype.getService = function () { return Rukuntangga.TbKtpService.baseUrl; };
            TbKtpDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbKtpRow.insertPermission; };
            TbKtpDialog.prototype.hasRole = function (role) {
                return AbidzarFrm.Authorization.userDefinition.Roles.indexOf(role) > -1;
            };
            TbKtpDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                var flag = false;
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
            };
            TbKtpDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
            };
            TbKtpDialog.prototype.validateBeforeSave = function () {
                _super.prototype.validateBeforeSave.call(this);
                if (!this.OnlyNumberRegex(this.form.Nik.value, 16)) {
                    Q.alert("Nik harus 16 digit");
                    return false;
                }
                if (!this.OnlyNumberRegex(this.form.Kk.value, 16)) {
                    Q.alert("Kk harus 10 digit");
                    return false;
                }
                return true;
            };
            TbKtpDialog.prototype.OnlyNumberRegex = function (str, digit) {
                if (str != null && str != "" && str != "-") {
                    var pattern = new RegExp("^\\d{" + digit + "}$");
                    return pattern.test(str);
                }
                else {
                    return true;
                }
            };
            TbKtpDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    icon: "fa-arrow-circle-right text-blue",
                    hint: "Submit",
                    title: "Submit",
                    cssClass: "btn-submit-boq",
                    onClick: function () {
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
            };
            TbKtpDialog.prototype.SetKota = function () {
                var _this = this;
                var idProvinsi = parseInt(this.form.IdProvinsi.value);
                var items = AbidzarFrm.Rukuntangga.TbKotaRow.getLookup().items.filter(function (x) { return x.IdProvinsi == idProvinsi; });
                items.forEach(function (x, index) {
                    _this.form.IdKota.addItem({ id: x.Id.toString(), source: x.NamaKota, text: x.NamaKota, disabled: false });
                });
                if (this.isEditMode()) {
                    this.form.IdKota.value = this.entity.IdKota.toString();
                }
            };
            TbKtpDialog.prototype.SetKecamatan = function () {
                var _this = this;
                var idKota = parseInt(this.form.IdKota.value);
                var items = AbidzarFrm.Rukuntangga.TbKecamatanRow.getLookup().items.filter(function (x) { return x.IdKota == idKota; });
                items.forEach(function (x, index) {
                    _this.form.IdKecamatan.addItem({ id: x.Id.toString(), source: x.NamaKecamatan, text: x.NamaKecamatan, disabled: false });
                });
                if (this.isEditMode()) {
                    this.form.IdKecamatan.value = this.entity.IdKecamatan.toString();
                }
            };
            TbKtpDialog.prototype.SetKelurahan = function () {
                var _this = this;
                var idKecamatan = parseInt(this.form.IdKecamatan.value);
                var items = AbidzarFrm.Rukuntangga.TbKelurahanRow.getLookup().items.filter(function (x) { return x.IdKecamatan == idKecamatan; });
                items.forEach(function (x, index) {
                    _this.form.IdKelurahan.addItem({ id: x.Id.toString(), source: x.NamaKelurahan, text: x.NamaKelurahan, disabled: false });
                });
                if (this.isEditMode()) {
                    this.form.IdKelurahan.value = this.entity.IdKelurahan.toString();
                }
            };
            TbKtpDialog.prototype.SetKotaTinggal = function () {
                var _this = this;
                var idProvinsiTinggal = parseInt(this.form.IdProvinsiTinggal.value);
                var items = AbidzarFrm.Rukuntangga.TbKotaRow.getLookup().items.filter(function (x) { return x.IdProvinsi == idProvinsiTinggal; });
                items.forEach(function (x, index) {
                    _this.form.IdKotaTinggal.addItem({ id: x.Id.toString(), source: x.NamaKota, text: x.NamaKota, disabled: false });
                });
                if (this.isEditMode()) {
                    this.form.IdKotaTinggal.value = this.entity.IdKotaTinggal.toString();
                }
            };
            TbKtpDialog.prototype.SetKecamatanTinggal = function () {
                var _this = this;
                var idKotaTinggal = parseInt(this.form.IdKotaTinggal.value);
                var items = AbidzarFrm.Rukuntangga.TbKecamatanRow.getLookup().items.filter(function (x) { return x.IdKota == idKotaTinggal; });
                items.forEach(function (x, index) {
                    _this.form.IdKecamatanTinggal.addItem({ id: x.Id.toString(), source: x.NamaKecamatan, text: x.NamaKecamatan, disabled: false });
                });
                if (this.isEditMode()) {
                    this.form.IdKecamatanTinggal.value = this.entity.IdKecamatanTinggal.toString();
                }
            };
            TbKtpDialog.prototype.SetKelurahanTinggal = function () {
                var _this = this;
                var idKecamatanTinggal = parseInt(this.form.IdKecamatanTinggal.value);
                var items = AbidzarFrm.Rukuntangga.TbKelurahanRow.getLookup().items.filter(function (x) { return x.IdKecamatan == idKecamatanTinggal; });
                items.forEach(function (x, index) {
                    _this.form.IdKelurahanTinggal.addItem({ id: x.Id.toString(), source: x.NamaKelurahan, text: x.NamaKelurahan, disabled: false });
                });
                if (this.isEditMode()) {
                    this.form.IdKelurahanTinggal.value = this.entity.IdKelurahanTinggal.toString();
                }
            };
            TbKtpDialog.prototype.IsSameAddressWithKtp = function (flag) {
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
            };
            Object.defineProperty(TbKtpDialog.prototype, "isDraft", {
                get: function () {
                    return this.entity.DataStatus == StatusCode.Draft;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TbKtpDialog.prototype, "isRequest", {
                get: function () {
                    return this.entity.DataStatus == StatusCode.Requested;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TbKtpDialog.prototype, "isVerified", {
                get: function () {
                    return this.entity.DataStatus == StatusCode.Verified;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TbKtpDialog.prototype, "isRejected", {
                get: function () {
                    return this.entity.DataStatus == StatusCode.Requested;
                },
                enumerable: true,
                configurable: true
            });
            TbKtpDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], TbKtpDialog);
            return TbKtpDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbKtpDialog = TbKtpDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../tbktp/tbktpdialog.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        /**
         * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
         */
        var Registrasi = /** @class */ (function (_super) {
            __extends(Registrasi, _super);
            function Registrasi() {
                return _super.call(this) || this;
            }
            Registrasi.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            Registrasi.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
            };
            Registrasi = __decorate([
                Serenity.Decorators.panel()
            ], Registrasi);
            return Registrasi;
        }(Rukuntangga.TbKtpDialog));
        Rukuntangga.Registrasi = Registrasi;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbAutentikasiTokenDialog = /** @class */ (function (_super) {
            __extends(TbAutentikasiTokenDialog, _super);
            function TbAutentikasiTokenDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbAutentikasiTokenDialog.prototype.getFormKey = function () { return Rukuntangga.TbAutentikasiTokenForm.formKey; };
            TbAutentikasiTokenDialog.prototype.getIdProperty = function () { return Rukuntangga.TbAutentikasiTokenRow.idProperty; };
            TbAutentikasiTokenDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbAutentikasiTokenRow.localTextPrefix; };
            TbAutentikasiTokenDialog.prototype.getNameProperty = function () { return Rukuntangga.TbAutentikasiTokenRow.nameProperty; };
            TbAutentikasiTokenDialog.prototype.getService = function () { return Rukuntangga.TbAutentikasiTokenService.baseUrl; };
            TbAutentikasiTokenDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbAutentikasiTokenRow.insertPermission; };
            TbAutentikasiTokenDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbAutentikasiTokenDialog);
            return TbAutentikasiTokenDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbAutentikasiTokenDialog = TbAutentikasiTokenDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbAutentikasiTokenGrid = /** @class */ (function (_super) {
            __extends(TbAutentikasiTokenGrid, _super);
            function TbAutentikasiTokenGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbAutentikasiTokenGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbAutentikasiToken'; };
            TbAutentikasiTokenGrid.prototype.getDialogType = function () { return Rukuntangga.TbAutentikasiTokenDialog; };
            TbAutentikasiTokenGrid.prototype.getIdProperty = function () { return Rukuntangga.TbAutentikasiTokenRow.idProperty; };
            TbAutentikasiTokenGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbAutentikasiTokenRow.insertPermission; };
            TbAutentikasiTokenGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbAutentikasiTokenGrid);
            return TbAutentikasiTokenGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbAutentikasiTokenGrid = TbAutentikasiTokenGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbBiodataDialog = /** @class */ (function (_super) {
            __extends(TbBiodataDialog, _super);
            function TbBiodataDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbBiodataDialog.prototype.getFormKey = function () { return Rukuntangga.TbBiodataForm.formKey; };
            //protected getIdProperty() { return TbBiodataRow.idProperty; }
            TbBiodataDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbBiodataRow.localTextPrefix; };
            TbBiodataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbBiodataDialog);
            return TbBiodataDialog;
        }(AbidzarFrm.Common.GridEditorDialog));
        Rukuntangga.TbBiodataDialog = TbBiodataDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbBiodataEditor = /** @class */ (function (_super) {
            __extends(TbBiodataEditor, _super);
            function TbBiodataEditor(container) {
                return _super.call(this, container) || this;
            }
            TbBiodataEditor.prototype.getColumnsKey = function () { return "Rukuntangga.TbBiodata"; };
            TbBiodataEditor.prototype.getDialogType = function () { return Rukuntangga.TbBiodataDialog; };
            TbBiodataEditor.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbBiodataRow.localTextPrefix; };
            TbBiodataEditor.prototype.validateEntity = function (row, id) {
                return true;
            };
            TbBiodataEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TbBiodataEditor);
            return TbBiodataEditor;
        }(AbidzarFrm.Common.GridEditorBase));
        Rukuntangga.TbBiodataEditor = TbBiodataEditor;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbBiodataGrid = /** @class */ (function (_super) {
            __extends(TbBiodataGrid, _super);
            function TbBiodataGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbBiodataGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbBiodata'; };
            TbBiodataGrid.prototype.getDialogType = function () { return Rukuntangga.TbBiodataDialog; };
            TbBiodataGrid.prototype.getIdProperty = function () { return Rukuntangga.TbBiodataRow.idProperty; };
            TbBiodataGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbBiodataRow.insertPermission; };
            TbBiodataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbBiodataGrid);
            return TbBiodataGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbBiodataGrid = TbBiodataGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailJenisInformasiDialog = /** @class */ (function (_super) {
            __extends(TbDetailJenisInformasiDialog, _super);
            function TbDetailJenisInformasiDialog() {
                var _this = _super.call(this) || this;
                //protected getNameProperty() { return TbDetailJenisInformasiRow.nameProperty; }
                //protected getService() { return TbDetailJenisInformasiService.baseUrl; }
                //protected getDeletePermission() { return TbDetailJenisInformasiRow.insertPermission; }
                _this.form = new Rukuntangga.TbDetailJenisInformasiForm(_this.idPrefix);
                return _this;
            }
            TbDetailJenisInformasiDialog.prototype.getFormKey = function () { return Rukuntangga.TbDetailJenisInformasiForm.formKey; };
            //protected getIdProperty() { return TbDetailJenisInformasiRow.idProperty; }
            TbDetailJenisInformasiDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbDetailJenisInformasiRow.localTextPrefix; };
            TbDetailJenisInformasiDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable(),
                Serenity.Decorators.panel()
            ], TbDetailJenisInformasiDialog);
            return TbDetailJenisInformasiDialog;
        }(AbidzarFrm.Common.GridEditorDialog));
        Rukuntangga.TbDetailJenisInformasiDialog = TbDetailJenisInformasiDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailJenisInformasiEditor = /** @class */ (function (_super) {
            __extends(TbDetailJenisInformasiEditor, _super);
            function TbDetailJenisInformasiEditor(container) {
                return _super.call(this, container) || this;
            }
            TbDetailJenisInformasiEditor.prototype.getColumnsKey = function () { return "Rukuntangga.TbDetailJenisInformasi"; };
            TbDetailJenisInformasiEditor.prototype.getDialogType = function () { return Rukuntangga.TbDetailJenisInformasiDialog; };
            TbDetailJenisInformasiEditor.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbDetailJenisInformasiRow.localTextPrefix; };
            TbDetailJenisInformasiEditor.prototype.validateEntity = function (row, id) {
                return true;
            };
            TbDetailJenisInformasiEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TbDetailJenisInformasiEditor);
            return TbDetailJenisInformasiEditor;
        }(AbidzarFrm.Common.GridEditorBase));
        Rukuntangga.TbDetailJenisInformasiEditor = TbDetailJenisInformasiEditor;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailJenisInformasiGrid = /** @class */ (function (_super) {
            __extends(TbDetailJenisInformasiGrid, _super);
            function TbDetailJenisInformasiGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbDetailJenisInformasiGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbDetailJenisInformasi'; };
            TbDetailJenisInformasiGrid.prototype.getDialogType = function () { return Rukuntangga.TbDetailJenisInformasiDialog; };
            TbDetailJenisInformasiGrid.prototype.getIdProperty = function () { return Rukuntangga.TbDetailJenisInformasiRow.idProperty; };
            TbDetailJenisInformasiGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbDetailJenisInformasiRow.insertPermission; };
            TbDetailJenisInformasiGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbDetailJenisInformasiGrid);
            return TbDetailJenisInformasiGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbDetailJenisInformasiGrid = TbDetailJenisInformasiGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailJenisKegiatanDialog = /** @class */ (function (_super) {
            __extends(TbDetailJenisKegiatanDialog, _super);
            function TbDetailJenisKegiatanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //protected getNameProperty() { return TbDetailJenisKegiatanRow.nameProperty; }
                //protected getService() { return TbDetailJenisKegiatanService.baseUrl; }
                //protected getDeletePermission() { return TbDetailJenisKegiatanRow.insertPermission; }
                _this.form = new Rukuntangga.TbDetailJenisKegiatanForm(_this.idPrefix);
                return _this;
            }
            TbDetailJenisKegiatanDialog.prototype.getFormKey = function () { return Rukuntangga.TbDetailJenisKegiatanForm.formKey; };
            //protected getIdProperty() { return TbDetailJenisKegiatanRow.idProperty; }
            TbDetailJenisKegiatanDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbDetailJenisKegiatanRow.localTextPrefix; };
            TbDetailJenisKegiatanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbDetailJenisKegiatanDialog);
            return TbDetailJenisKegiatanDialog;
        }(AbidzarFrm.Common.GridEditorDialog));
        Rukuntangga.TbDetailJenisKegiatanDialog = TbDetailJenisKegiatanDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailJenisKegiatanEditor = /** @class */ (function (_super) {
            __extends(TbDetailJenisKegiatanEditor, _super);
            function TbDetailJenisKegiatanEditor(container) {
                return _super.call(this, container) || this;
            }
            TbDetailJenisKegiatanEditor.prototype.getColumnsKey = function () { return "Rukuntangga.TbDetailJenisKegiatan"; };
            TbDetailJenisKegiatanEditor.prototype.getDialogType = function () { return Rukuntangga.TbDetailJenisKegiatanDialog; };
            TbDetailJenisKegiatanEditor.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbDetailJenisKegiatanRow.localTextPrefix; };
            TbDetailJenisKegiatanEditor.prototype.validateEntity = function (row, id) {
                return true;
            };
            TbDetailJenisKegiatanEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TbDetailJenisKegiatanEditor);
            return TbDetailJenisKegiatanEditor;
        }(AbidzarFrm.Common.GridEditorBase));
        Rukuntangga.TbDetailJenisKegiatanEditor = TbDetailJenisKegiatanEditor;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailJenisKegiatanGrid = /** @class */ (function (_super) {
            __extends(TbDetailJenisKegiatanGrid, _super);
            function TbDetailJenisKegiatanGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbDetailJenisKegiatanGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbDetailJenisKegiatan'; };
            TbDetailJenisKegiatanGrid.prototype.getDialogType = function () { return Rukuntangga.TbDetailJenisKegiatanDialog; };
            TbDetailJenisKegiatanGrid.prototype.getIdProperty = function () { return Rukuntangga.TbDetailJenisKegiatanRow.idProperty; };
            TbDetailJenisKegiatanGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbDetailJenisKegiatanRow.insertPermission; };
            TbDetailJenisKegiatanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbDetailJenisKegiatanGrid);
            return TbDetailJenisKegiatanGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbDetailJenisKegiatanGrid = TbDetailJenisKegiatanGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailPemiluDialog = /** @class */ (function (_super) {
            __extends(TbDetailPemiluDialog, _super);
            function TbDetailPemiluDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //protected getNameProperty() { return TbDetailPemiluRow.nameProperty; }
                //protected getService() { return TbDetailPemiluService.baseUrl; }
                //protected getDeletePermission() { return TbDetailPemiluRow.insertPermission; }
                _this.form = new Rukuntangga.TbDetailPemiluForm(_this.idPrefix);
                return _this;
            }
            TbDetailPemiluDialog.prototype.getFormKey = function () { return Rukuntangga.TbDetailPemiluForm.formKey; };
            //protected getIdProperty() { return TbDetailPemiluRow.idProperty; }
            TbDetailPemiluDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbDetailPemiluRow.localTextPrefix; };
            TbDetailPemiluDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel(),
                Serenity.Decorators.maximizable()
            ], TbDetailPemiluDialog);
            return TbDetailPemiluDialog;
        }(AbidzarFrm.Common.GridEditorDialog));
        Rukuntangga.TbDetailPemiluDialog = TbDetailPemiluDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailPemiluEditor = /** @class */ (function (_super) {
            __extends(TbDetailPemiluEditor, _super);
            function TbDetailPemiluEditor(container) {
                return _super.call(this, container) || this;
            }
            TbDetailPemiluEditor.prototype.getColumnsKey = function () { return "Rukuntangga.TbDetailPemilu"; };
            TbDetailPemiluEditor.prototype.getDialogType = function () { return Rukuntangga.TbDetailPemiluDialog; };
            TbDetailPemiluEditor.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbDetailPemiluRow.localTextPrefix; };
            TbDetailPemiluEditor.prototype.validateEntity = function (row, id) {
                return true;
            };
            TbDetailPemiluEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TbDetailPemiluEditor);
            return TbDetailPemiluEditor;
        }(AbidzarFrm.Common.GridEditorBase));
        Rukuntangga.TbDetailPemiluEditor = TbDetailPemiluEditor;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDetailPemiluGrid = /** @class */ (function (_super) {
            __extends(TbDetailPemiluGrid, _super);
            function TbDetailPemiluGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbDetailPemiluGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbDetailPemilu'; };
            TbDetailPemiluGrid.prototype.getDialogType = function () { return Rukuntangga.TbDetailPemiluDialog; };
            TbDetailPemiluGrid.prototype.getIdProperty = function () { return Rukuntangga.TbDetailPemiluRow.idProperty; };
            TbDetailPemiluGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbDetailPemiluRow.insertPermission; };
            TbDetailPemiluGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbDetailPemiluGrid);
            return TbDetailPemiluGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbDetailPemiluGrid = TbDetailPemiluGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDokumentasiDetailJenisKegiatanDialog = /** @class */ (function (_super) {
            __extends(TbDokumentasiDetailJenisKegiatanDialog, _super);
            function TbDokumentasiDetailJenisKegiatanDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbDokumentasiDetailJenisKegiatanDialog.prototype.getFormKey = function () { return Rukuntangga.TbDokumentasiDetailJenisKegiatanForm.formKey; };
            TbDokumentasiDetailJenisKegiatanDialog.prototype.getIdProperty = function () { return Rukuntangga.TbDokumentasiDetailJenisKegiatanRow.idProperty; };
            TbDokumentasiDetailJenisKegiatanDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbDokumentasiDetailJenisKegiatanRow.localTextPrefix; };
            TbDokumentasiDetailJenisKegiatanDialog.prototype.getNameProperty = function () { return Rukuntangga.TbDokumentasiDetailJenisKegiatanRow.nameProperty; };
            TbDokumentasiDetailJenisKegiatanDialog.prototype.getService = function () { return Rukuntangga.TbDokumentasiDetailJenisKegiatanService.baseUrl; };
            TbDokumentasiDetailJenisKegiatanDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbDokumentasiDetailJenisKegiatanRow.insertPermission; };
            TbDokumentasiDetailJenisKegiatanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbDokumentasiDetailJenisKegiatanDialog);
            return TbDokumentasiDetailJenisKegiatanDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbDokumentasiDetailJenisKegiatanDialog = TbDokumentasiDetailJenisKegiatanDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbDokumentasiDetailJenisKegiatanGrid = /** @class */ (function (_super) {
            __extends(TbDokumentasiDetailJenisKegiatanGrid, _super);
            function TbDokumentasiDetailJenisKegiatanGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbDokumentasiDetailJenisKegiatanGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbDokumentasiDetailJenisKegiatan'; };
            TbDokumentasiDetailJenisKegiatanGrid.prototype.getDialogType = function () { return Rukuntangga.TbDokumentasiDetailJenisKegiatanDialog; };
            TbDokumentasiDetailJenisKegiatanGrid.prototype.getIdProperty = function () { return Rukuntangga.TbDokumentasiDetailJenisKegiatanRow.idProperty; };
            TbDokumentasiDetailJenisKegiatanGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbDokumentasiDetailJenisKegiatanRow.insertPermission; };
            TbDokumentasiDetailJenisKegiatanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbDokumentasiDetailJenisKegiatanGrid);
            return TbDokumentasiDetailJenisKegiatanGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbDokumentasiDetailJenisKegiatanGrid = TbDokumentasiDetailJenisKegiatanGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbEmailTemplateDialog = /** @class */ (function (_super) {
            __extends(TbEmailTemplateDialog, _super);
            function TbEmailTemplateDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbEmailTemplateDialog.prototype.getFormKey = function () { return Rukuntangga.TbEmailTemplateForm.formKey; };
            TbEmailTemplateDialog.prototype.getIdProperty = function () { return Rukuntangga.TbEmailTemplateRow.idProperty; };
            TbEmailTemplateDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbEmailTemplateRow.localTextPrefix; };
            TbEmailTemplateDialog.prototype.getNameProperty = function () { return Rukuntangga.TbEmailTemplateRow.nameProperty; };
            TbEmailTemplateDialog.prototype.getService = function () { return Rukuntangga.TbEmailTemplateService.baseUrl; };
            TbEmailTemplateDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbEmailTemplateRow.insertPermission; };
            TbEmailTemplateDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbEmailTemplateDialog);
            return TbEmailTemplateDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbEmailTemplateDialog = TbEmailTemplateDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbEmailTemplateGrid = /** @class */ (function (_super) {
            __extends(TbEmailTemplateGrid, _super);
            function TbEmailTemplateGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbEmailTemplateGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbEmailTemplate'; };
            TbEmailTemplateGrid.prototype.getDialogType = function () { return Rukuntangga.TbEmailTemplateDialog; };
            TbEmailTemplateGrid.prototype.getIdProperty = function () { return Rukuntangga.TbEmailTemplateRow.idProperty; };
            TbEmailTemplateGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbEmailTemplateRow.insertPermission; };
            TbEmailTemplateGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbEmailTemplateGrid);
            return TbEmailTemplateGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbEmailTemplateGrid = TbEmailTemplateGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbErrorLogsDialog = /** @class */ (function (_super) {
            __extends(TbErrorLogsDialog, _super);
            function TbErrorLogsDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbErrorLogsDialog.prototype.getFormKey = function () { return TbErrorLogsForm.formKey; };
            TbErrorLogsDialog.prototype.getIdProperty = function () { return TbErrorLogsRow.idProperty; };
            TbErrorLogsDialog.prototype.getLocalTextPrefix = function () { return TbErrorLogsRow.localTextPrefix; };
            TbErrorLogsDialog.prototype.getNameProperty = function () { return TbErrorLogsRow.nameProperty; };
            TbErrorLogsDialog.prototype.getService = function () { return TbErrorLogsService.baseUrl; };
            TbErrorLogsDialog.prototype.getDeletePermission = function () { return TbErrorLogsRow.insertPermission; };
            TbErrorLogsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbErrorLogsDialog);
            return TbErrorLogsDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbErrorLogsDialog = TbErrorLogsDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbErrorLogsGrid = /** @class */ (function (_super) {
            __extends(TbErrorLogsGrid, _super);
            function TbErrorLogsGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbErrorLogsGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbErrorLogs'; };
            TbErrorLogsGrid.prototype.getDialogType = function () { return Rukuntangga.TbErrorLogsDialog; };
            TbErrorLogsGrid.prototype.getIdProperty = function () { return TbErrorLogsRow.idProperty; };
            TbErrorLogsGrid.prototype.getInsertPermission = function () { return TbErrorLogsRow.insertPermission; };
            TbErrorLogsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbErrorLogsGrid);
            return TbErrorLogsGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbErrorLogsGrid = TbErrorLogsGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbGaleryGrid = /** @class */ (function (_super) {
            __extends(TbGaleryGrid, _super);
            function TbGaleryGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbGaleryGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbGalery'; };
            TbGaleryGrid.prototype.getDialogType = function () { return Rukuntangga.TbGaleryDialog; };
            TbGaleryGrid.prototype.getIdProperty = function () { return Rukuntangga.TbGaleryRow.idProperty; };
            TbGaleryGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbGaleryRow.insertPermission; };
            TbGaleryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbGaleryGrid);
            return TbGaleryGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbGaleryGrid = TbGaleryGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbHistoricalUserLoginDialog = /** @class */ (function (_super) {
            __extends(TbHistoricalUserLoginDialog, _super);
            function TbHistoricalUserLoginDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbHistoricalUserLoginDialog.prototype.getFormKey = function () { return Rukuntangga.TbHistoricalUserLoginForm.formKey; };
            TbHistoricalUserLoginDialog.prototype.getIdProperty = function () { return Rukuntangga.TbHistoricalUserLoginRow.idProperty; };
            TbHistoricalUserLoginDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbHistoricalUserLoginRow.localTextPrefix; };
            TbHistoricalUserLoginDialog.prototype.getNameProperty = function () { return Rukuntangga.TbHistoricalUserLoginRow.nameProperty; };
            TbHistoricalUserLoginDialog.prototype.getService = function () { return Rukuntangga.TbHistoricalUserLoginService.baseUrl; };
            TbHistoricalUserLoginDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbHistoricalUserLoginRow.insertPermission; };
            TbHistoricalUserLoginDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbHistoricalUserLoginDialog);
            return TbHistoricalUserLoginDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbHistoricalUserLoginDialog = TbHistoricalUserLoginDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbHistoricalUserLoginGrid = /** @class */ (function (_super) {
            __extends(TbHistoricalUserLoginGrid, _super);
            function TbHistoricalUserLoginGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbHistoricalUserLoginGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbHistoricalUserLogin'; };
            TbHistoricalUserLoginGrid.prototype.getDialogType = function () { return Rukuntangga.TbHistoricalUserLoginDialog; };
            TbHistoricalUserLoginGrid.prototype.getIdProperty = function () { return Rukuntangga.TbHistoricalUserLoginRow.idProperty; };
            TbHistoricalUserLoginGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbHistoricalUserLoginRow.insertPermission; };
            TbHistoricalUserLoginGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbHistoricalUserLoginGrid);
            return TbHistoricalUserLoginGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbHistoricalUserLoginGrid = TbHistoricalUserLoginGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJabatanDialog = /** @class */ (function (_super) {
            __extends(TbJabatanDialog, _super);
            function TbJabatanDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbJabatanDialog.prototype.getFormKey = function () { return Rukuntangga.TbJabatanForm.formKey; };
            TbJabatanDialog.prototype.getIdProperty = function () { return Rukuntangga.TbJabatanRow.idProperty; };
            TbJabatanDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbJabatanRow.localTextPrefix; };
            TbJabatanDialog.prototype.getNameProperty = function () { return Rukuntangga.TbJabatanRow.nameProperty; };
            TbJabatanDialog.prototype.getService = function () { return Rukuntangga.TbJabatanService.baseUrl; };
            TbJabatanDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbJabatanRow.insertPermission; };
            TbJabatanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbJabatanDialog);
            return TbJabatanDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbJabatanDialog = TbJabatanDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJabatanGrid = /** @class */ (function (_super) {
            __extends(TbJabatanGrid, _super);
            function TbJabatanGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbJabatanGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbJabatan'; };
            TbJabatanGrid.prototype.getDialogType = function () { return Rukuntangga.TbJabatanDialog; };
            TbJabatanGrid.prototype.getIdProperty = function () { return Rukuntangga.TbJabatanRow.idProperty; };
            TbJabatanGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbJabatanRow.insertPermission; };
            TbJabatanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbJabatanGrid);
            return TbJabatanGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbJabatanGrid = TbJabatanGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJadwalSiskamlimDialog = /** @class */ (function (_super) {
            __extends(TbJadwalSiskamlimDialog, _super);
            function TbJadwalSiskamlimDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbJadwalSiskamlimDialog.prototype.getFormKey = function () { return Rukuntangga.TbJadwalSiskamlimForm.formKey; };
            TbJadwalSiskamlimDialog.prototype.getIdProperty = function () { return Rukuntangga.TbJadwalSiskamlimRow.idProperty; };
            TbJadwalSiskamlimDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbJadwalSiskamlimRow.localTextPrefix; };
            TbJadwalSiskamlimDialog.prototype.getNameProperty = function () { return Rukuntangga.TbJadwalSiskamlimRow.nameProperty; };
            TbJadwalSiskamlimDialog.prototype.getService = function () { return Rukuntangga.TbJadwalSiskamlimService.baseUrl; };
            TbJadwalSiskamlimDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbJadwalSiskamlimRow.insertPermission; };
            TbJadwalSiskamlimDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbJadwalSiskamlimDialog);
            return TbJadwalSiskamlimDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbJadwalSiskamlimDialog = TbJadwalSiskamlimDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJadwalSiskamlimGrid = /** @class */ (function (_super) {
            __extends(TbJadwalSiskamlimGrid, _super);
            function TbJadwalSiskamlimGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbJadwalSiskamlimGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbJadwalSiskamlim'; };
            TbJadwalSiskamlimGrid.prototype.getDialogType = function () { return Rukuntangga.TbJadwalSiskamlimDialog; };
            TbJadwalSiskamlimGrid.prototype.getIdProperty = function () { return Rukuntangga.TbJadwalSiskamlimRow.idProperty; };
            TbJadwalSiskamlimGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbJadwalSiskamlimRow.insertPermission; };
            TbJadwalSiskamlimGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbJadwalSiskamlimGrid);
            return TbJadwalSiskamlimGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbJadwalSiskamlimGrid = TbJadwalSiskamlimGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJenisInformasiDialog = /** @class */ (function (_super) {
            __extends(TbJenisInformasiDialog, _super);
            function TbJenisInformasiDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbJenisInformasiDialog.prototype.getFormKey = function () { return Rukuntangga.TbJenisInformasiForm.formKey; };
            TbJenisInformasiDialog.prototype.getIdProperty = function () { return Rukuntangga.TbJenisInformasiRow.idProperty; };
            TbJenisInformasiDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbJenisInformasiRow.localTextPrefix; };
            TbJenisInformasiDialog.prototype.getNameProperty = function () { return Rukuntangga.TbJenisInformasiRow.nameProperty; };
            TbJenisInformasiDialog.prototype.getService = function () { return Rukuntangga.TbJenisInformasiService.baseUrl; };
            TbJenisInformasiDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbJenisInformasiRow.insertPermission; };
            TbJenisInformasiDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], TbJenisInformasiDialog);
            return TbJenisInformasiDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbJenisInformasiDialog = TbJenisInformasiDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJenisInformasiGrid = /** @class */ (function (_super) {
            __extends(TbJenisInformasiGrid, _super);
            function TbJenisInformasiGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbJenisInformasiGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbJenisInformasi'; };
            TbJenisInformasiGrid.prototype.getDialogType = function () { return Rukuntangga.TbJenisInformasiDialog; };
            TbJenisInformasiGrid.prototype.getIdProperty = function () { return Rukuntangga.TbJenisInformasiRow.idProperty; };
            TbJenisInformasiGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbJenisInformasiRow.insertPermission; };
            TbJenisInformasiGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbJenisInformasiGrid);
            return TbJenisInformasiGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbJenisInformasiGrid = TbJenisInformasiGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJenisKegiatanDialog = /** @class */ (function (_super) {
            __extends(TbJenisKegiatanDialog, _super);
            function TbJenisKegiatanDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbJenisKegiatanDialog.prototype.getFormKey = function () { return Rukuntangga.TbJenisKegiatanForm.formKey; };
            TbJenisKegiatanDialog.prototype.getIdProperty = function () { return Rukuntangga.TbJenisKegiatanRow.idProperty; };
            TbJenisKegiatanDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbJenisKegiatanRow.localTextPrefix; };
            TbJenisKegiatanDialog.prototype.getNameProperty = function () { return Rukuntangga.TbJenisKegiatanRow.nameProperty; };
            TbJenisKegiatanDialog.prototype.getService = function () { return Rukuntangga.TbJenisKegiatanService.baseUrl; };
            TbJenisKegiatanDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbJenisKegiatanRow.insertPermission; };
            TbJenisKegiatanDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], TbJenisKegiatanDialog);
            return TbJenisKegiatanDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbJenisKegiatanDialog = TbJenisKegiatanDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbJenisKegiatanGrid = /** @class */ (function (_super) {
            __extends(TbJenisKegiatanGrid, _super);
            function TbJenisKegiatanGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbJenisKegiatanGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbJenisKegiatan'; };
            TbJenisKegiatanGrid.prototype.getDialogType = function () { return Rukuntangga.TbJenisKegiatanDialog; };
            TbJenisKegiatanGrid.prototype.getIdProperty = function () { return Rukuntangga.TbJenisKegiatanRow.idProperty; };
            TbJenisKegiatanGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbJenisKegiatanRow.insertPermission; };
            TbJenisKegiatanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbJenisKegiatanGrid);
            return TbJenisKegiatanGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbJenisKegiatanGrid = TbJenisKegiatanGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKecamatanDialog = /** @class */ (function (_super) {
            __extends(TbKecamatanDialog, _super);
            function TbKecamatanDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbKecamatanDialog.prototype.getFormKey = function () { return Rukuntangga.TbKecamatanForm.formKey; };
            TbKecamatanDialog.prototype.getIdProperty = function () { return Rukuntangga.TbKecamatanRow.idProperty; };
            TbKecamatanDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbKecamatanRow.localTextPrefix; };
            TbKecamatanDialog.prototype.getNameProperty = function () { return Rukuntangga.TbKecamatanRow.nameProperty; };
            TbKecamatanDialog.prototype.getService = function () { return Rukuntangga.TbKecamatanService.baseUrl; };
            TbKecamatanDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbKecamatanRow.insertPermission; };
            TbKecamatanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbKecamatanDialog);
            return TbKecamatanDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbKecamatanDialog = TbKecamatanDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKecamatanGrid = /** @class */ (function (_super) {
            __extends(TbKecamatanGrid, _super);
            function TbKecamatanGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbKecamatanGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbKecamatan'; };
            TbKecamatanGrid.prototype.getDialogType = function () { return Rukuntangga.TbKecamatanDialog; };
            TbKecamatanGrid.prototype.getIdProperty = function () { return Rukuntangga.TbKecamatanRow.idProperty; };
            TbKecamatanGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbKecamatanRow.insertPermission; };
            TbKecamatanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbKecamatanGrid);
            return TbKecamatanGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbKecamatanGrid = TbKecamatanGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKelurahanDialog = /** @class */ (function (_super) {
            __extends(TbKelurahanDialog, _super);
            function TbKelurahanDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbKelurahanDialog.prototype.getFormKey = function () { return Rukuntangga.TbKelurahanForm.formKey; };
            TbKelurahanDialog.prototype.getIdProperty = function () { return Rukuntangga.TbKelurahanRow.idProperty; };
            TbKelurahanDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbKelurahanRow.localTextPrefix; };
            TbKelurahanDialog.prototype.getNameProperty = function () { return Rukuntangga.TbKelurahanRow.nameProperty; };
            TbKelurahanDialog.prototype.getService = function () { return Rukuntangga.TbKelurahanService.baseUrl; };
            TbKelurahanDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbKelurahanRow.insertPermission; };
            TbKelurahanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbKelurahanDialog);
            return TbKelurahanDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbKelurahanDialog = TbKelurahanDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKelurahanGrid = /** @class */ (function (_super) {
            __extends(TbKelurahanGrid, _super);
            function TbKelurahanGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbKelurahanGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbKelurahan'; };
            TbKelurahanGrid.prototype.getDialogType = function () { return Rukuntangga.TbKelurahanDialog; };
            TbKelurahanGrid.prototype.getIdProperty = function () { return Rukuntangga.TbKelurahanRow.idProperty; };
            TbKelurahanGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbKelurahanRow.insertPermission; };
            TbKelurahanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbKelurahanGrid);
            return TbKelurahanGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbKelurahanGrid = TbKelurahanGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKotaDialog = /** @class */ (function (_super) {
            __extends(TbKotaDialog, _super);
            function TbKotaDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbKotaDialog.prototype.getFormKey = function () { return Rukuntangga.TbKotaForm.formKey; };
            TbKotaDialog.prototype.getIdProperty = function () { return Rukuntangga.TbKotaRow.idProperty; };
            TbKotaDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbKotaRow.localTextPrefix; };
            TbKotaDialog.prototype.getNameProperty = function () { return Rukuntangga.TbKotaRow.nameProperty; };
            TbKotaDialog.prototype.getService = function () { return Rukuntangga.TbKotaService.baseUrl; };
            TbKotaDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbKotaRow.insertPermission; };
            TbKotaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbKotaDialog);
            return TbKotaDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbKotaDialog = TbKotaDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKotaGrid = /** @class */ (function (_super) {
            __extends(TbKotaGrid, _super);
            function TbKotaGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbKotaGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbKota'; };
            TbKotaGrid.prototype.getDialogType = function () { return Rukuntangga.TbKotaDialog; };
            TbKotaGrid.prototype.getIdProperty = function () { return Rukuntangga.TbKotaRow.idProperty; };
            TbKotaGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbKotaRow.insertPermission; };
            TbKotaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbKotaGrid);
            return TbKotaGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbKotaGrid = TbKotaGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../basicsamples/grids/enablingrowselection/selectableentitygrid.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbKtpGrid = /** @class */ (function (_super) {
            __extends(TbKtpGrid, _super);
            function TbKtpGrid(container) {
                return _super.call(this, container) || this;
            }
            TbKtpGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbKtp'; };
            TbKtpGrid.prototype.getDialogType = function () { return Rukuntangga.TbKtpDialog; };
            TbKtpGrid.prototype.getIdProperty = function () { return Rukuntangga.TbKtpRow.idProperty; };
            TbKtpGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbKtpRow.insertPermission; };
            TbKtpGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(AbidzarFrm.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Rukuntangga/TbKtp/ListExcel',
                    separator: true
                }));
                return buttons;
            };
            TbKtpGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], TbKtpGrid);
            return TbKtpGrid;
        }(AbidzarFrm.SelectableEntityGrid));
        Rukuntangga.TbKtpGrid = TbKtpGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbLaporanKasDialog = /** @class */ (function (_super) {
            __extends(TbLaporanKasDialog, _super);
            function TbLaporanKasDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbLaporanKasDialog.prototype.getFormKey = function () { return Rukuntangga.TbLaporanKasForm.formKey; };
            TbLaporanKasDialog.prototype.getIdProperty = function () { return Rukuntangga.TbLaporanKasRow.idProperty; };
            TbLaporanKasDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbLaporanKasRow.localTextPrefix; };
            TbLaporanKasDialog.prototype.getNameProperty = function () { return Rukuntangga.TbLaporanKasRow.nameProperty; };
            TbLaporanKasDialog.prototype.getService = function () { return Rukuntangga.TbLaporanKasService.baseUrl; };
            TbLaporanKasDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbLaporanKasRow.insertPermission; };
            TbLaporanKasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbLaporanKasDialog);
            return TbLaporanKasDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbLaporanKasDialog = TbLaporanKasDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbLaporanKasGrid = /** @class */ (function (_super) {
            __extends(TbLaporanKasGrid, _super);
            function TbLaporanKasGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbLaporanKasGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbLaporanKas'; };
            TbLaporanKasGrid.prototype.getDialogType = function () { return Rukuntangga.TbLaporanKasDialog; };
            TbLaporanKasGrid.prototype.getIdProperty = function () { return Rukuntangga.TbLaporanKasRow.idProperty; };
            TbLaporanKasGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbLaporanKasRow.insertPermission; };
            TbLaporanKasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbLaporanKasGrid);
            return TbLaporanKasGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbLaporanKasGrid = TbLaporanKasGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbListOfValueDialog = /** @class */ (function (_super) {
            __extends(TbListOfValueDialog, _super);
            function TbListOfValueDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbListOfValueDialog.prototype.getFormKey = function () { return Rukuntangga.TbListOfValueForm.formKey; };
            TbListOfValueDialog.prototype.getIdProperty = function () { return Rukuntangga.TbListOfValueRow.idProperty; };
            TbListOfValueDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbListOfValueRow.localTextPrefix; };
            TbListOfValueDialog.prototype.getNameProperty = function () { return Rukuntangga.TbListOfValueRow.nameProperty; };
            TbListOfValueDialog.prototype.getService = function () { return Rukuntangga.TbListOfValueService.baseUrl; };
            TbListOfValueDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbListOfValueRow.insertPermission; };
            TbListOfValueDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbListOfValueDialog);
            return TbListOfValueDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbListOfValueDialog = TbListOfValueDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbListOfValueGrid = /** @class */ (function (_super) {
            __extends(TbListOfValueGrid, _super);
            function TbListOfValueGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbListOfValueGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbListOfValue'; };
            TbListOfValueGrid.prototype.getDialogType = function () { return Rukuntangga.TbListOfValueDialog; };
            TbListOfValueGrid.prototype.getIdProperty = function () { return Rukuntangga.TbListOfValueRow.idProperty; };
            TbListOfValueGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbListOfValueRow.insertPermission; };
            TbListOfValueGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbListOfValueGrid);
            return TbListOfValueGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbListOfValueGrid = TbListOfValueGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbMailLogDialog = /** @class */ (function (_super) {
            __extends(TbMailLogDialog, _super);
            function TbMailLogDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Rukuntangga.TbMailLogForm(_this.idPrefix);
                return _this;
            }
            TbMailLogDialog.prototype.getFormKey = function () { return Rukuntangga.TbMailLogForm.formKey; };
            TbMailLogDialog.prototype.getIdProperty = function () { return Rukuntangga.TbMailLogRow.idProperty; };
            TbMailLogDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbMailLogRow.localTextPrefix; };
            TbMailLogDialog.prototype.getNameProperty = function () { return Rukuntangga.TbMailLogRow.nameProperty; };
            TbMailLogDialog.prototype.getService = function () { return Rukuntangga.TbMailLogService.baseUrl; };
            TbMailLogDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbMailLogRow.insertPermission; };
            TbMailLogDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("btn-sent-email").toggle(this.isEditMode());
            };
            TbMailLogDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    icon: "fa-edit text-green",
                    hint: "Sent Email",
                    title: "Send Email",
                    cssClass: "btn-sent-email",
                    onClick: function () {
                        Rukuntangga.TbMailLogService.SendEmail({
                            Entity: _this.entity
                        }, function (response) {
                            Q.notifyInfo(response.MessageText);
                            _this.dialogClose();
                            //this.mailLogGrids.refresh();
                        }, {
                            async: true
                        });
                    }
                });
                return buttons;
            };
            TbMailLogDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbMailLogDialog);
            return TbMailLogDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbMailLogDialog = TbMailLogDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbMailLogGrid = /** @class */ (function (_super) {
            __extends(TbMailLogGrid, _super);
            function TbMailLogGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbMailLogGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbMailLog'; };
            TbMailLogGrid.prototype.getDialogType = function () { return Rukuntangga.TbMailLogDialog; };
            TbMailLogGrid.prototype.getIdProperty = function () { return Rukuntangga.TbMailLogRow.idProperty; };
            TbMailLogGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbMailLogRow.insertPermission; };
            TbMailLogGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbMailLogGrid);
            return TbMailLogGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbMailLogGrid = TbMailLogGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbParameterDialog = /** @class */ (function (_super) {
            __extends(TbParameterDialog, _super);
            function TbParameterDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbParameterDialog.prototype.getFormKey = function () { return Rukuntangga.TbParameterForm.formKey; };
            TbParameterDialog.prototype.getIdProperty = function () { return Rukuntangga.TbParameterRow.idProperty; };
            TbParameterDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbParameterRow.localTextPrefix; };
            TbParameterDialog.prototype.getNameProperty = function () { return Rukuntangga.TbParameterRow.nameProperty; };
            TbParameterDialog.prototype.getService = function () { return Rukuntangga.TbParameterService.baseUrl; };
            TbParameterDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbParameterRow.insertPermission; };
            TbParameterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbParameterDialog);
            return TbParameterDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbParameterDialog = TbParameterDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbParameterGrid = /** @class */ (function (_super) {
            __extends(TbParameterGrid, _super);
            function TbParameterGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbParameterGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbParameter'; };
            TbParameterGrid.prototype.getDialogType = function () { return Rukuntangga.TbParameterDialog; };
            TbParameterGrid.prototype.getIdProperty = function () { return Rukuntangga.TbParameterRow.idProperty; };
            TbParameterGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbParameterRow.insertPermission; };
            TbParameterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbParameterGrid);
            return TbParameterGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbParameterGrid = TbParameterGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPemiluDialog = /** @class */ (function (_super) {
            __extends(TbPemiluDialog, _super);
            function TbPemiluDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbPemiluDialog.prototype.getFormKey = function () { return Rukuntangga.TbPemiluForm.formKey; };
            TbPemiluDialog.prototype.getIdProperty = function () { return Rukuntangga.TbPemiluRow.idProperty; };
            TbPemiluDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbPemiluRow.localTextPrefix; };
            TbPemiluDialog.prototype.getNameProperty = function () { return Rukuntangga.TbPemiluRow.nameProperty; };
            TbPemiluDialog.prototype.getService = function () { return Rukuntangga.TbPemiluService.baseUrl; };
            TbPemiluDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbPemiluRow.insertPermission; };
            TbPemiluDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], TbPemiluDialog);
            return TbPemiluDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbPemiluDialog = TbPemiluDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPemiluGrid = /** @class */ (function (_super) {
            __extends(TbPemiluGrid, _super);
            function TbPemiluGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbPemiluGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbPemilu'; };
            TbPemiluGrid.prototype.getDialogType = function () { return Rukuntangga.TbPemiluDialog; };
            TbPemiluGrid.prototype.getIdProperty = function () { return Rukuntangga.TbPemiluRow.idProperty; };
            TbPemiluGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbPemiluRow.insertPermission; };
            TbPemiluGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbPemiluGrid);
            return TbPemiluGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbPemiluGrid = TbPemiluGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPhotoKtpDialog = /** @class */ (function (_super) {
            __extends(TbPhotoKtpDialog, _super);
            function TbPhotoKtpDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbPhotoKtpDialog.prototype.getFormKey = function () { return Rukuntangga.TbPhotoKtpForm.formKey; };
            TbPhotoKtpDialog.prototype.getIdProperty = function () { return Rukuntangga.TbPhotoKtpRow.idProperty; };
            TbPhotoKtpDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbPhotoKtpRow.localTextPrefix; };
            TbPhotoKtpDialog.prototype.getNameProperty = function () { return Rukuntangga.TbPhotoKtpRow.nameProperty; };
            TbPhotoKtpDialog.prototype.getService = function () { return Rukuntangga.TbPhotoKtpService.baseUrl; };
            TbPhotoKtpDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbPhotoKtpRow.insertPermission; };
            TbPhotoKtpDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbPhotoKtpDialog);
            return TbPhotoKtpDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbPhotoKtpDialog = TbPhotoKtpDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPhotoKtpGrid = /** @class */ (function (_super) {
            __extends(TbPhotoKtpGrid, _super);
            function TbPhotoKtpGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbPhotoKtpGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbPhotoKtp'; };
            TbPhotoKtpGrid.prototype.getDialogType = function () { return Rukuntangga.TbPhotoKtpDialog; };
            TbPhotoKtpGrid.prototype.getIdProperty = function () { return Rukuntangga.TbPhotoKtpRow.idProperty; };
            TbPhotoKtpGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbPhotoKtpRow.insertPermission; };
            TbPhotoKtpGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbPhotoKtpGrid);
            return TbPhotoKtpGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbPhotoKtpGrid = TbPhotoKtpGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPollingPemiluDialog = /** @class */ (function (_super) {
            __extends(TbPollingPemiluDialog, _super);
            function TbPollingPemiluDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbPollingPemiluDialog.prototype.getFormKey = function () { return Rukuntangga.TbPollingPemiluForm.formKey; };
            //protected getIdProperty() { return TbPollingPemiluRow.idProperty; }
            TbPollingPemiluDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbPollingPemiluRow.localTextPrefix; };
            TbPollingPemiluDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbPollingPemiluDialog);
            return TbPollingPemiluDialog;
        }(AbidzarFrm.Common.GridEditorDialog));
        Rukuntangga.TbPollingPemiluDialog = TbPollingPemiluDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPollingPemiluEditor = /** @class */ (function (_super) {
            __extends(TbPollingPemiluEditor, _super);
            function TbPollingPemiluEditor(container) {
                return _super.call(this, container) || this;
            }
            TbPollingPemiluEditor.prototype.getColumnsKey = function () { return "Rukuntangga.TbPollingPemilu"; };
            TbPollingPemiluEditor.prototype.getDialogType = function () { return Rukuntangga.TbPollingPemiluDialog; };
            TbPollingPemiluEditor.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbPollingPemiluRow.localTextPrefix; };
            TbPollingPemiluEditor.prototype.validateEntity = function (row, id) {
                return true;
            };
            TbPollingPemiluEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TbPollingPemiluEditor);
            return TbPollingPemiluEditor;
        }(AbidzarFrm.Common.GridEditorBase));
        Rukuntangga.TbPollingPemiluEditor = TbPollingPemiluEditor;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbPollingPemiluGrid = /** @class */ (function (_super) {
            __extends(TbPollingPemiluGrid, _super);
            function TbPollingPemiluGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbPollingPemiluGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbPollingPemilu'; };
            TbPollingPemiluGrid.prototype.getDialogType = function () { return Rukuntangga.TbPollingPemiluDialog; };
            TbPollingPemiluGrid.prototype.getIdProperty = function () { return Rukuntangga.TbPollingPemiluRow.idProperty; };
            TbPollingPemiluGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbPollingPemiluRow.insertPermission; };
            TbPollingPemiluGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbPollingPemiluGrid);
            return TbPollingPemiluGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbPollingPemiluGrid = TbPollingPemiluGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbProvinsiDialog = /** @class */ (function (_super) {
            __extends(TbProvinsiDialog, _super);
            function TbProvinsiDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbProvinsiDialog.prototype.getFormKey = function () { return Rukuntangga.TbProvinsiForm.formKey; };
            TbProvinsiDialog.prototype.getIdProperty = function () { return Rukuntangga.TbProvinsiRow.idProperty; };
            TbProvinsiDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbProvinsiRow.localTextPrefix; };
            TbProvinsiDialog.prototype.getNameProperty = function () { return Rukuntangga.TbProvinsiRow.nameProperty; };
            TbProvinsiDialog.prototype.getService = function () { return Rukuntangga.TbProvinsiService.baseUrl; };
            TbProvinsiDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbProvinsiRow.insertPermission; };
            TbProvinsiDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbProvinsiDialog);
            return TbProvinsiDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbProvinsiDialog = TbProvinsiDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbProvinsiGrid = /** @class */ (function (_super) {
            __extends(TbProvinsiGrid, _super);
            function TbProvinsiGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbProvinsiGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbProvinsi'; };
            TbProvinsiGrid.prototype.getDialogType = function () { return Rukuntangga.TbProvinsiDialog; };
            TbProvinsiGrid.prototype.getIdProperty = function () { return Rukuntangga.TbProvinsiRow.idProperty; };
            TbProvinsiGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbProvinsiRow.insertPermission; };
            TbProvinsiGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbProvinsiGrid);
            return TbProvinsiGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbProvinsiGrid = TbProvinsiGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbRtDialog = /** @class */ (function (_super) {
            __extends(TbRtDialog, _super);
            function TbRtDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Rukuntangga.TbRtForm(_this.idPrefix);
                $('<a class="inplace-button btn-pick-item"> <i class="fa fa-search-plus"></i></a>')
                    .insertAfter(_this.form.IdRwKodeRw.element)
                    .click(function () { return _this.PickRw(); });
                return _this;
            }
            TbRtDialog.prototype.getFormKey = function () { return Rukuntangga.TbRtForm.formKey; };
            TbRtDialog.prototype.getIdProperty = function () { return Rukuntangga.TbRtRow.idProperty; };
            TbRtDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbRtRow.localTextPrefix; };
            TbRtDialog.prototype.getNameProperty = function () { return Rukuntangga.TbRtRow.nameProperty; };
            TbRtDialog.prototype.getService = function () { return Rukuntangga.TbRtService.baseUrl; };
            TbRtDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbRtRow.insertPermission; };
            TbRtDialog.prototype.GetRwById = function (idRw) {
                var data = Rukuntangga.TbRwRow.getLookup().itemById[idRw];
                this.form.IdRwKodeRw.value = data == null ? "" : data.KodeRw;
            };
            TbRtDialog.prototype.PickRw = function () {
                var _this = this;
                var dlg = new Rukuntangga.PickRwDialog();
                dlg.OldItemId = this.form.IdRw.value;
                dlg.dialogOpen();
                dlg.element.on('dialogclose', function () {
                    _this.form.IdRw.value = dlg.pickRwGrid.id;
                    _this.GetRwById(_this.form.IdRw.value);
                });
            };
            TbRtDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.element.find(".IdRw").toggle(false);
            };
            TbRtDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], TbRtDialog);
            return TbRtDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbRtDialog = TbRtDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbRtGrid = /** @class */ (function (_super) {
            __extends(TbRtGrid, _super);
            function TbRtGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbRtGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbRt'; };
            TbRtGrid.prototype.getDialogType = function () { return Rukuntangga.TbRtDialog; };
            TbRtGrid.prototype.getIdProperty = function () { return Rukuntangga.TbRtRow.idProperty; };
            TbRtGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbRtRow.insertPermission; };
            TbRtGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbRtGrid);
            return TbRtGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbRtGrid = TbRtGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var PickRwDialog = /** @class */ (function (_super) {
            __extends(PickRwDialog, _super);
            function PickRwDialog() {
                var _this = _super.call(this) || this;
                _this.dialogTitle = "RW";
                return _this;
            }
            PickRwDialog.prototype.onDialogOpen = function () {
                this.pickRwGrid = new Rukuntangga.PickRwGrid(this.byId('TbRwGrid'));
                _super.prototype.onDialogOpen.call(this);
            };
            PickRwDialog.prototype.getTemplate = function () {
                return ("<div id='~_TbRwGrid' style='height:600px; margin-left:10px;margin-right:10px;'></div>");
            };
            PickRwDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            _this.dialogClose();
                        }
                    },
                    {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () {
                            _this.pickRwGrid.id = _this.oldItemId;
                            _this.dialogClose();
                        }
                    }
                ];
                return opt;
            };
            Object.defineProperty(PickRwDialog.prototype, "OldItemId", {
                get: function () {
                    return this.oldItemId;
                },
                set: function (value) {
                    this.oldItemId = value;
                },
                enumerable: true,
                configurable: true
            });
            PickRwDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PickRwDialog);
            return PickRwDialog;
        }(Serenity.TemplatedDialog));
        Rukuntangga.PickRwDialog = PickRwDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var PickRwGrid = /** @class */ (function (_super) {
            __extends(PickRwGrid, _super);
            function PickRwGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.toolbar.findButton("add-button").toggle(false);
                return _this;
            }
            PickRwGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbRw'; };
            //protected getDialogType() { return BoqItemPriceHeaderDialog; }
            PickRwGrid.prototype.getIdProperty = function () { return Rukuntangga.TbRwRow.idProperty; };
            PickRwGrid.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbRwRow.localTextPrefix; };
            PickRwGrid.prototype.getService = function () { return Rukuntangga.TbRwService.baseUrl; };
            PickRwGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Pick Item',
                    name: '',
                    format: function (ctx) { return '<input type="radio" name="pilihitem" class="pick-item">'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            PickRwGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.hasClass('pick-item')) {
                    this.id = item.Id;
                }
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('pick-item')) {
                        this.id = item.Id;
                        this.element.parent().dialog('close');
                    }
                }
            };
            PickRwGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PickRwGrid);
            return PickRwGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.PickRwGrid = PickRwGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbRwDialog = /** @class */ (function (_super) {
            __extends(TbRwDialog, _super);
            function TbRwDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbRwDialog.prototype.getFormKey = function () { return Rukuntangga.TbRwForm.formKey; };
            TbRwDialog.prototype.getIdProperty = function () { return Rukuntangga.TbRwRow.idProperty; };
            TbRwDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbRwRow.localTextPrefix; };
            TbRwDialog.prototype.getNameProperty = function () { return Rukuntangga.TbRwRow.nameProperty; };
            TbRwDialog.prototype.getService = function () { return Rukuntangga.TbRwService.baseUrl; };
            TbRwDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbRwRow.insertPermission; };
            TbRwDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], TbRwDialog);
            return TbRwDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbRwDialog = TbRwDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbRwGrid = /** @class */ (function (_super) {
            __extends(TbRwGrid, _super);
            function TbRwGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbRwGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbRw'; };
            TbRwGrid.prototype.getDialogType = function () { return Rukuntangga.TbRwDialog; };
            TbRwGrid.prototype.getIdProperty = function () { return Rukuntangga.TbRwRow.idProperty; };
            TbRwGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbRwRow.insertPermission; };
            TbRwGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbRwGrid);
            return TbRwGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbRwGrid = TbRwGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbSlideShowDialog = /** @class */ (function (_super) {
            __extends(TbSlideShowDialog, _super);
            function TbSlideShowDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbSlideShowDialog.prototype.getFormKey = function () { return Rukuntangga.TbSlideShowForm.formKey; };
            TbSlideShowDialog.prototype.getIdProperty = function () { return Rukuntangga.TbSlideShowRow.idProperty; };
            TbSlideShowDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbSlideShowRow.localTextPrefix; };
            TbSlideShowDialog.prototype.getNameProperty = function () { return Rukuntangga.TbSlideShowRow.nameProperty; };
            TbSlideShowDialog.prototype.getService = function () { return Rukuntangga.TbSlideShowService.baseUrl; };
            TbSlideShowDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbSlideShowRow.insertPermission; };
            TbSlideShowDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbSlideShowDialog);
            return TbSlideShowDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbSlideShowDialog = TbSlideShowDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbSlideShowGrid = /** @class */ (function (_super) {
            __extends(TbSlideShowGrid, _super);
            function TbSlideShowGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbSlideShowGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbSlideShow'; };
            TbSlideShowGrid.prototype.getDialogType = function () { return Rukuntangga.TbSlideShowDialog; };
            TbSlideShowGrid.prototype.getIdProperty = function () { return Rukuntangga.TbSlideShowRow.idProperty; };
            TbSlideShowGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbSlideShowRow.insertPermission; };
            TbSlideShowGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbSlideShowGrid);
            return TbSlideShowGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbSlideShowGrid = TbSlideShowGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbStrukturDialog = /** @class */ (function (_super) {
            __extends(TbStrukturDialog, _super);
            function TbStrukturDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbStrukturDialog.prototype.getFormKey = function () { return Rukuntangga.TbStrukturForm.formKey; };
            TbStrukturDialog.prototype.getIdProperty = function () { return Rukuntangga.TbStrukturRow.idProperty; };
            TbStrukturDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbStrukturRow.localTextPrefix; };
            TbStrukturDialog.prototype.getNameProperty = function () { return Rukuntangga.TbStrukturRow.nameProperty; };
            TbStrukturDialog.prototype.getService = function () { return Rukuntangga.TbStrukturService.baseUrl; };
            TbStrukturDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbStrukturRow.insertPermission; };
            TbStrukturDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbStrukturDialog);
            return TbStrukturDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbStrukturDialog = TbStrukturDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbStrukturGrid = /** @class */ (function (_super) {
            __extends(TbStrukturGrid, _super);
            function TbStrukturGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbStrukturGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbStruktur'; };
            TbStrukturGrid.prototype.getDialogType = function () { return Rukuntangga.TbStrukturDialog; };
            TbStrukturGrid.prototype.getIdProperty = function () { return Rukuntangga.TbStrukturRow.idProperty; };
            TbStrukturGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbStrukturRow.insertPermission; };
            TbStrukturGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbStrukturGrid);
            return TbStrukturGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbStrukturGrid = TbStrukturGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTanyaRtDialog = /** @class */ (function (_super) {
            __extends(TbTanyaRtDialog, _super);
            function TbTanyaRtDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbTanyaRtDialog.prototype.getFormKey = function () { return Rukuntangga.TbTanyaRtForm.formKey; };
            TbTanyaRtDialog.prototype.getIdProperty = function () { return Rukuntangga.TbTanyaRtRow.idProperty; };
            TbTanyaRtDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbTanyaRtRow.localTextPrefix; };
            TbTanyaRtDialog.prototype.getNameProperty = function () { return Rukuntangga.TbTanyaRtRow.nameProperty; };
            TbTanyaRtDialog.prototype.getService = function () { return Rukuntangga.TbTanyaRtService.baseUrl; };
            TbTanyaRtDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbTanyaRtRow.insertPermission; };
            TbTanyaRtDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbTanyaRtDialog);
            return TbTanyaRtDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbTanyaRtDialog = TbTanyaRtDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTanyaRtGrid = /** @class */ (function (_super) {
            __extends(TbTanyaRtGrid, _super);
            function TbTanyaRtGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbTanyaRtGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbTanyaRt'; };
            TbTanyaRtGrid.prototype.getDialogType = function () { return Rukuntangga.TbTanyaRtDialog; };
            TbTanyaRtGrid.prototype.getIdProperty = function () { return Rukuntangga.TbTanyaRtRow.idProperty; };
            TbTanyaRtGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbTanyaRtRow.insertPermission; };
            TbTanyaRtGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbTanyaRtGrid);
            return TbTanyaRtGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbTanyaRtGrid = TbTanyaRtGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTanyaRtDetailDialog = /** @class */ (function (_super) {
            __extends(TbTanyaRtDetailDialog, _super);
            function TbTanyaRtDetailDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbTanyaRtDetailDialog.prototype.getFormKey = function () { return Rukuntangga.TbTanyaRtDetailForm.formKey; };
            TbTanyaRtDetailDialog.prototype.getIdProperty = function () { return Rukuntangga.TbTanyaRtDetailRow.idProperty; };
            TbTanyaRtDetailDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbTanyaRtDetailRow.localTextPrefix; };
            TbTanyaRtDetailDialog.prototype.getNameProperty = function () { return Rukuntangga.TbTanyaRtDetailRow.nameProperty; };
            TbTanyaRtDetailDialog.prototype.getService = function () { return Rukuntangga.TbTanyaRtDetailService.baseUrl; };
            TbTanyaRtDetailDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbTanyaRtDetailRow.insertPermission; };
            TbTanyaRtDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbTanyaRtDetailDialog);
            return TbTanyaRtDetailDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbTanyaRtDetailDialog = TbTanyaRtDetailDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTanyaRtDetailGrid = /** @class */ (function (_super) {
            __extends(TbTanyaRtDetailGrid, _super);
            function TbTanyaRtDetailGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbTanyaRtDetailGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbTanyaRtDetail'; };
            TbTanyaRtDetailGrid.prototype.getDialogType = function () { return Rukuntangga.TbTanyaRtDetailDialog; };
            TbTanyaRtDetailGrid.prototype.getIdProperty = function () { return Rukuntangga.TbTanyaRtDetailRow.idProperty; };
            TbTanyaRtDetailGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbTanyaRtDetailRow.insertPermission; };
            TbTanyaRtDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbTanyaRtDetailGrid);
            return TbTanyaRtDetailGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbTanyaRtDetailGrid = TbTanyaRtDetailGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTestimoniDialog = /** @class */ (function (_super) {
            __extends(TbTestimoniDialog, _super);
            function TbTestimoniDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbTestimoniDialog.prototype.getFormKey = function () { return Rukuntangga.TbTestimoniForm.formKey; };
            TbTestimoniDialog.prototype.getIdProperty = function () { return Rukuntangga.TbTestimoniRow.idProperty; };
            TbTestimoniDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbTestimoniRow.localTextPrefix; };
            TbTestimoniDialog.prototype.getNameProperty = function () { return Rukuntangga.TbTestimoniRow.nameProperty; };
            TbTestimoniDialog.prototype.getService = function () { return Rukuntangga.TbTestimoniService.baseUrl; };
            TbTestimoniDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbTestimoniRow.insertPermission; };
            TbTestimoniDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbTestimoniDialog);
            return TbTestimoniDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbTestimoniDialog = TbTestimoniDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTestimoniGrid = /** @class */ (function (_super) {
            __extends(TbTestimoniGrid, _super);
            function TbTestimoniGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbTestimoniGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbTestimoni'; };
            TbTestimoniGrid.prototype.getDialogType = function () { return Rukuntangga.TbTestimoniDialog; };
            TbTestimoniGrid.prototype.getIdProperty = function () { return Rukuntangga.TbTestimoniRow.idProperty; };
            TbTestimoniGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbTestimoniRow.insertPermission; };
            TbTestimoniGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbTestimoniGrid);
            return TbTestimoniGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbTestimoniGrid = TbTestimoniGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionDocumentCodeDialog = /** @class */ (function (_super) {
            __extends(TbTransactionDocumentCodeDialog, _super);
            function TbTransactionDocumentCodeDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbTransactionDocumentCodeDialog.prototype.getFormKey = function () { return Rukuntangga.TbTransactionDocumentCodeForm.formKey; };
            TbTransactionDocumentCodeDialog.prototype.getIdProperty = function () { return Rukuntangga.TbTransactionDocumentCodeRow.idProperty; };
            TbTransactionDocumentCodeDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbTransactionDocumentCodeRow.localTextPrefix; };
            TbTransactionDocumentCodeDialog.prototype.getNameProperty = function () { return Rukuntangga.TbTransactionDocumentCodeRow.nameProperty; };
            TbTransactionDocumentCodeDialog.prototype.getService = function () { return Rukuntangga.TbTransactionDocumentCodeService.baseUrl; };
            TbTransactionDocumentCodeDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbTransactionDocumentCodeRow.insertPermission; };
            TbTransactionDocumentCodeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbTransactionDocumentCodeDialog);
            return TbTransactionDocumentCodeDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbTransactionDocumentCodeDialog = TbTransactionDocumentCodeDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionDocumentCodeGrid = /** @class */ (function (_super) {
            __extends(TbTransactionDocumentCodeGrid, _super);
            function TbTransactionDocumentCodeGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbTransactionDocumentCodeGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbTransactionDocumentCode'; };
            TbTransactionDocumentCodeGrid.prototype.getDialogType = function () { return Rukuntangga.TbTransactionDocumentCodeDialog; };
            TbTransactionDocumentCodeGrid.prototype.getIdProperty = function () { return Rukuntangga.TbTransactionDocumentCodeRow.idProperty; };
            TbTransactionDocumentCodeGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbTransactionDocumentCodeRow.insertPermission; };
            TbTransactionDocumentCodeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbTransactionDocumentCodeGrid);
            return TbTransactionDocumentCodeGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbTransactionDocumentCodeGrid = TbTransactionDocumentCodeGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionFlowDialog = /** @class */ (function (_super) {
            __extends(TbTransactionFlowDialog, _super);
            function TbTransactionFlowDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbTransactionFlowDialog.prototype.getFormKey = function () { return Rukuntangga.TbTransactionFlowForm.formKey; };
            TbTransactionFlowDialog.prototype.getIdProperty = function () { return Rukuntangga.TbTransactionFlowRow.idProperty; };
            TbTransactionFlowDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbTransactionFlowRow.localTextPrefix; };
            TbTransactionFlowDialog.prototype.getNameProperty = function () { return Rukuntangga.TbTransactionFlowRow.nameProperty; };
            TbTransactionFlowDialog.prototype.getService = function () { return Rukuntangga.TbTransactionFlowService.baseUrl; };
            TbTransactionFlowDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbTransactionFlowRow.insertPermission; };
            TbTransactionFlowDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], TbTransactionFlowDialog);
            return TbTransactionFlowDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbTransactionFlowDialog = TbTransactionFlowDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionFlowGrid = /** @class */ (function (_super) {
            __extends(TbTransactionFlowGrid, _super);
            function TbTransactionFlowGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbTransactionFlowGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbTransactionFlow'; };
            TbTransactionFlowGrid.prototype.getDialogType = function () { return Rukuntangga.TbTransactionFlowDialog; };
            TbTransactionFlowGrid.prototype.getIdProperty = function () { return Rukuntangga.TbTransactionFlowRow.idProperty; };
            TbTransactionFlowGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbTransactionFlowRow.insertPermission; };
            TbTransactionFlowGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbTransactionFlowGrid);
            return TbTransactionFlowGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbTransactionFlowGrid = TbTransactionFlowGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionFlowDetailDialog = /** @class */ (function (_super) {
            __extends(TbTransactionFlowDetailDialog, _super);
            //protected getNameProperty() { return TbTransactionFlowDetailRow.nameProperty; }
            //protected getService() { return TbTransactionFlowDetailService.baseUrl; }
            //protected getDeletePermission() { return TbTransactionFlowDetailRow.insertPermission; }
            function TbTransactionFlowDetailDialog(container) {
                return _super.call(this, container) || this;
            }
            TbTransactionFlowDetailDialog.prototype.getFormKey = function () { return Rukuntangga.TbTransactionFlowDetailForm.formKey; };
            //protected getIdProperty() { return TbTransactionFlowDetailRow.idProperty; }
            TbTransactionFlowDetailDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbTransactionFlowDetailRow.localTextPrefix; };
            TbTransactionFlowDetailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], TbTransactionFlowDetailDialog);
            return TbTransactionFlowDetailDialog;
        }(AbidzarFrm.Common.GridEditorDialog));
        Rukuntangga.TbTransactionFlowDetailDialog = TbTransactionFlowDetailDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
/// <reference path="../../common/helpers/grideditorbase.ts" />
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionFlowDetailEditor = /** @class */ (function (_super) {
            __extends(TbTransactionFlowDetailEditor, _super);
            function TbTransactionFlowDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            TbTransactionFlowDetailEditor.prototype.getColumnsKey = function () { return "Rukuntangga.TbTransactionFlowDetail"; };
            TbTransactionFlowDetailEditor.prototype.getDialogType = function () { return Rukuntangga.TbTransactionFlowDetailDialog; };
            TbTransactionFlowDetailEditor.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbTransactionFlowDetailRow.localTextPrefix; };
            TbTransactionFlowDetailEditor.prototype.validateEntity = function (row, id) {
                return true;
            };
            TbTransactionFlowDetailEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TbTransactionFlowDetailEditor);
            return TbTransactionFlowDetailEditor;
        }(AbidzarFrm.Common.GridEditorBase));
        Rukuntangga.TbTransactionFlowDetailEditor = TbTransactionFlowDetailEditor;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionFlowDetailGrid = /** @class */ (function (_super) {
            __extends(TbTransactionFlowDetailGrid, _super);
            function TbTransactionFlowDetailGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbTransactionFlowDetailGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbTransactionFlowDetail'; };
            TbTransactionFlowDetailGrid.prototype.getDialogType = function () { return Rukuntangga.TbTransactionFlowDetailDialog; };
            TbTransactionFlowDetailGrid.prototype.getIdProperty = function () { return Rukuntangga.TbTransactionFlowDetailRow.idProperty; };
            TbTransactionFlowDetailGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbTransactionFlowDetailRow.insertPermission; };
            TbTransactionFlowDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbTransactionFlowDetailGrid);
            return TbTransactionFlowDetailGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbTransactionFlowDetailGrid = TbTransactionFlowDetailGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionStatusDialog = /** @class */ (function (_super) {
            __extends(TbTransactionStatusDialog, _super);
            function TbTransactionStatusDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbTransactionStatusDialog.prototype.getFormKey = function () { return Rukuntangga.TbTransactionStatusForm.formKey; };
            TbTransactionStatusDialog.prototype.getIdProperty = function () { return Rukuntangga.TbTransactionStatusRow.idProperty; };
            TbTransactionStatusDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbTransactionStatusRow.localTextPrefix; };
            TbTransactionStatusDialog.prototype.getNameProperty = function () { return Rukuntangga.TbTransactionStatusRow.nameProperty; };
            TbTransactionStatusDialog.prototype.getService = function () { return Rukuntangga.TbTransactionStatusService.baseUrl; };
            TbTransactionStatusDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbTransactionStatusRow.insertPermission; };
            TbTransactionStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbTransactionStatusDialog);
            return TbTransactionStatusDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbTransactionStatusDialog = TbTransactionStatusDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbTransactionStatusGrid = /** @class */ (function (_super) {
            __extends(TbTransactionStatusGrid, _super);
            function TbTransactionStatusGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbTransactionStatusGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbTransactionStatus'; };
            TbTransactionStatusGrid.prototype.getDialogType = function () { return Rukuntangga.TbTransactionStatusDialog; };
            TbTransactionStatusGrid.prototype.getIdProperty = function () { return Rukuntangga.TbTransactionStatusRow.idProperty; };
            TbTransactionStatusGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbTransactionStatusRow.insertPermission; };
            TbTransactionStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbTransactionStatusGrid);
            return TbTransactionStatusGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbTransactionStatusGrid = TbTransactionStatusGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbUserDialog = /** @class */ (function (_super) {
            __extends(TbUserDialog, _super);
            function TbUserDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbUserDialog.prototype.getFormKey = function () { return Rukuntangga.TbUserForm.formKey; };
            TbUserDialog.prototype.getIdProperty = function () { return Rukuntangga.TbUserRow.idProperty; };
            TbUserDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbUserRow.localTextPrefix; };
            TbUserDialog.prototype.getNameProperty = function () { return Rukuntangga.TbUserRow.nameProperty; };
            TbUserDialog.prototype.getService = function () { return Rukuntangga.TbUserService.baseUrl; };
            TbUserDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbUserRow.insertPermission; };
            TbUserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbUserDialog);
            return TbUserDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbUserDialog = TbUserDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbUserGrid = /** @class */ (function (_super) {
            __extends(TbUserGrid, _super);
            function TbUserGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbUserGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbUser'; };
            TbUserGrid.prototype.getDialogType = function () { return Rukuntangga.TbUserDialog; };
            TbUserGrid.prototype.getIdProperty = function () { return Rukuntangga.TbUserRow.idProperty; };
            TbUserGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbUserRow.insertPermission; };
            TbUserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbUserGrid);
            return TbUserGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbUserGrid = TbUserGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbUserApiDialog = /** @class */ (function (_super) {
            __extends(TbUserApiDialog, _super);
            function TbUserApiDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbUserApiDialog.prototype.getFormKey = function () { return Rukuntangga.TbUserApiForm.formKey; };
            TbUserApiDialog.prototype.getIdProperty = function () { return Rukuntangga.TbUserApiRow.idProperty; };
            TbUserApiDialog.prototype.getLocalTextPrefix = function () { return Rukuntangga.TbUserApiRow.localTextPrefix; };
            TbUserApiDialog.prototype.getNameProperty = function () { return Rukuntangga.TbUserApiRow.nameProperty; };
            TbUserApiDialog.prototype.getService = function () { return Rukuntangga.TbUserApiService.baseUrl; };
            TbUserApiDialog.prototype.getDeletePermission = function () { return Rukuntangga.TbUserApiRow.insertPermission; };
            TbUserApiDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbUserApiDialog);
            return TbUserApiDialog;
        }(Serenity.EntityDialog));
        Rukuntangga.TbUserApiDialog = TbUserApiDialog;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var TbUserApiGrid = /** @class */ (function (_super) {
            __extends(TbUserApiGrid, _super);
            function TbUserApiGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbUserApiGrid.prototype.getColumnsKey = function () { return 'Rukuntangga.TbUserApi'; };
            TbUserApiGrid.prototype.getDialogType = function () { return Rukuntangga.TbUserApiDialog; };
            TbUserApiGrid.prototype.getIdProperty = function () { return Rukuntangga.TbUserApiRow.idProperty; };
            TbUserApiGrid.prototype.getInsertPermission = function () { return Rukuntangga.TbUserApiRow.insertPermission; };
            TbUserApiGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbUserApiGrid);
            return TbUserApiGrid;
        }(Serenity.EntityGrid));
        Rukuntangga.TbUserApiGrid = TbUserApiGrid;
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
var AbidzarFrm;
(function (AbidzarFrm) {
    var Rukuntangga;
    (function (Rukuntangga) {
        var WargaDialog;
        (function (WargaDialog) {
            function initializePage() {
                //information();
                //ModalPop();
            }
            WargaDialog.initializePage = initializePage;
            function GetIndex() {
            }
            WargaDialog.GetIndex = GetIndex;
            function ModalPop(url, id, form) {
                $.get(url + id, { "_": $.now() }, function (data) {
                    $(form).html(data).dialog("open");
                    $(form).html(data).dialog({ draggable: false }).parent().draggable();
                });
            }
            function information() {
                $('#information').click(function () {
                    Q.alert("<h4>Here is some HTML content!</h4>" +
                        "<ul><li>Item 1</li><li>Item 2</li >" +
                        "<li>Visit <a href='http://serenity.is/' target='_blank' style='color: #ddf'>http://serenity.is/</a>!</li></ul>", {
                        htmlEncode: false
                    });
                });
            }
        })(WargaDialog = Rukuntangga.WargaDialog || (Rukuntangga.WargaDialog = {}));
    })(Rukuntangga = AbidzarFrm.Rukuntangga || (AbidzarFrm.Rukuntangga = {}));
})(AbidzarFrm || (AbidzarFrm = {}));
//# sourceMappingURL=AbidzarFrm.Web.js.map