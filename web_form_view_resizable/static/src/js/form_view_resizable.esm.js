/** @odoo-module **/
import {FormRenderer} from "@web/views/form/form_renderer";
import {patch} from "@web/core/utils/patch";
import {onMounted} from "@odoo/owl";
patch(FormRenderer.prototype, {
    setup() {
        super.setup(...arguments);
        onMounted(() => this._mounted());
    },
    _mounted() {
        $("div.o_form_view_container").resizable({
            handles: "e",
            minWidth: 400,
            maxWidth: 1200,
        });
    },
});
