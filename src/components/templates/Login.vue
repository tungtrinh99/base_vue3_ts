<template>
    <h1>Login</h1>
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Email" prop="email">
            <el-input v-model="ruleForm.email" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useAuth } from '~/composables/useAuth';

const { login } = useAuth()
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
    email: "",
    password: "",
})

const rules = reactive<FormRules<typeof ruleForm>>({
    email: [
        {
            required: true,
            message: "Please input the email",
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: "Please input the password",
            trigger: 'blur'
        }
    ],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            onLogin()
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const onLogin = async () => {
    try {
        await login({ email: ruleForm.email, password: ruleForm.password }, true)
    } catch (error) {
        console.log(error)
    }
}
</script>
  