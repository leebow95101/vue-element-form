<template>
    <div>
        <template v-for="(val, key, index) in formDatas.components">
            <el-form
                :ref="'form-'+ key"
                :key="key"
                :model="val"
                :inline="formDatas.formAttributes.inline"
                :label-width="formDatas.formAttributes.allLabelWidth"
                :style="formDatas.formAttributes.inline ? 'height: 70px;float: left' : ''"
            >
                <el-form-item
                    :index="index"
                    :label="val.label"
                    :label-width="val.labelWidth"
                    :rules="val.required ? [
                        {required: val.required.isRequired, message: val.required.message },
                        {
                            validator: function (rule, value, callback) {
                                if (!val.required.regMatch.test(value)) {
                                    callback(val.required.errMsg)
                                } else {
                                    callback()
                                }
                            }
                        }
                    ] : null"
                    prop="value"
                >
                    <component
                        :is="val.type"
                        :value="val.value"
                        :form-datas="{
                            ...val,
                            name: key,
                            index
                        }"
                        @input="_updateFormValues"
                        @event="$emit('event', $event)"
                    ></component>
                </el-form-item>
            </el-form>
        </template>
    </div>
</template>

<script>
import components from './components'
// import * as  regExp from '../rules'
export default {
    name: 'EForm',
    components,
    props: {
        formDatas: {
            type: Object,
            default: () => { }
        },
    },
    data () {
        return {
        };
    },
    watch: {
        'formDatas.components': {
            deep: true,
            immediate: true,
            handler (val) {
                // console.log(val, 999999)
            }
        }
    },
    methods: {
        _updateFormValues (key, val) {
            this.$set(this.formDatas.components[key], 'value', val)
            this.$emit('change', val)
        },
    },
}

</script>
<style lang='scss' scoped>
</style>