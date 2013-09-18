/// <reference path="../../Scripts/endgate-0.2.0-beta1.d.ts" />
/// <reference path="../Server/IPayloadDefinitions.ts" />
var ShootR;
(function (ShootR) {
    var LifeController = (function () {
        function LifeController(startLife) {
            this.Alive = true;
            this.MaxHealth = this.Health = startLife;
            this.OnLifeChange = new eg.EventHandler2();
        }
        Object.defineProperty(LifeController.prototype, "HealthPercent", {
            get: function () {
                return this.Health / this.MaxHealth;
            },
            enumerable: true,
            configurable: true
        });

        LifeController.prototype.LoadPayload = function (payload) {
            this.Alive = payload.LifeController.Alive;
            if (this.Health !== payload.LifeController.Health || this.MaxHealth !== payload.MaxLife) {
                this.Health = payload.LifeController.Health;
                this.MaxHealth = payload.MaxLife;

                this.OnLifeChange.Trigger(this.Health, this.MaxHealth);
            }
        };
        return LifeController;
    })();
    ShootR.LifeController = LifeController;
})(ShootR || (ShootR = {}));
//# sourceMappingURL=LifeController.js.map
