/*TODO translate this poor bastard*/
'use strict'
import t from 'tcomb-form'

export const loginStruct = t.struct({
    username: t.String,
    password: t.String
});

export const registerStruct = t.struct({
    username: t.String,
    email: t.String,
    password: t.String,
    passwordAgain: t.String
});

export const passwordResetStruct = t.struct({
    email: t.String
});

export var username = {
    label: I18n.t('LoginForm.username'),
    maxLength: 64,
    editable: !this.props.form.isFetching,
    hasError: this.props.form.fields.usernameHasError,
    error: this.props.form.fields.usernameErrorMsg
}

export var email = {
    label: I18n.t('LoginForm.email'),
    keyboardType: 'email-address',
    editable: !this.props.form.isFetching,
    hasError: this.props.form.fields.emailHasError,
    error: this.props.form.fields.emailErrorMsg
}



export var password = {
    label: I18n.t('LoginForm.password'),
    secureTextEntry: secureTextEntry,
    editable: !this.props.form.isFetching,
    hasError: this.props.form.fields.passwordHasError,
    error: this.props.form.fields.passwordErrorMsg
}

export var passwordAgain = {
    label: I18n.t('LoginForm.password_again'),
    secureTextEntry: secureTextEntry,
    maxLength: 12,
    editable: !this.props.form.isFetching,
    hasError: this.props.form.fields.passwordAgainHasError,
    error: this.props.form.fields.passwordAgainErrorMsg
}