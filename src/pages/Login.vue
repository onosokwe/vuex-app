<template>
	<div class="container login">
		<router-link to="./" class="loglogo">
			<img src="../assets/logo.png" class="img-fluid" />
		</router-link>
		<div class="account" style="max-width: 400px">
			<h1>Please Login</h1>
			<p class="text-danger"></p>
			<div class="row">
				<div class="form-group col-md-12">
					<label>Email</label>
					<input
					type="email"
					v-model="email"
					placeholder="email@website.com"
					class="form-control"
				/>
				</div>
				<div class="form-group col-md-12">
					<label>Password</label>
					<input
					type="password"
					v-model="password"
					placeholder="password"
					class="form-control"
					/>
				</div>
				<div class="col-md-12">
					<button 
					type="submit" 
					:disabled="loading" 
					class="btn btn-block" 
					@click="login()" > 
					<i class='fa fa-spin fa-spinner' v-if="loading"></i>
						{{ loading ? 'Signing in...' : 'Login' }}
					</button>
				</div>
			</div>
			<div class="form_links">
				<p>Forgot your Password? <router-link to="#">Reset it</router-link></p>
				<p>Not registered yet? <router-link to="#">Register</router-link></p>
				<span></span>
				<p>By logging in, you have agreed to abide by the <router-link to="#">terms</router-link> and 
				<router-link to="#">privacy policy</router-link> of this application.</p>
			</div>
		</div>
	</div>
</template>

<script>
import AuthService from "@/services/Auth.js";

export default {
	data() {
		return {
			email: "",
			password: "",
			msg: "",
			loading: false
		};
	},
	methods: {
		async login() {
			try {
				this.loading = true;
				const credentials = {
					email: this.email,
					password: this.password,
				};
				const response = await AuthService.login(credentials);
				this.msg = response.msg;
				console.log(this.msg);
				const token = response.access_token;
				const user = response.user;
				this.$store.dispatch("login", { token, user });
				this.$router.push("/");
			} 
			catch (error) {
				this.msg = error.response.data.msg;
			}
		},
	},
};
</script>