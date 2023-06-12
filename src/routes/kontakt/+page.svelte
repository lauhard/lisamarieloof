<script lang="ts">
	import FormError from '$lib/components/FormError.svelte';
	import Form from '$lib/components/Form.svelte';
    import type { ActionData, PageServerData } from "./$types";
    import { validate } from "$lib/zod/helper/forms.js";
    import Dropdown from '$lib/components/Dropdown.svelte';
    import Checkbox from '$lib/components/svgs/Checkbox.svelte';
    let action = "add";
    let leistungen:string | undefined="";
    let lastnameError:string | undefined="";
    let firstnameError:string | undefined="";
    let emailError:string | undefined="";
    let phoneError:string | undefined="";
    export let form: ActionData;
    export let data: PageServerData;
    let showActions = false;
     /**
     * brings up the result of the progressive enhanced form
     * for add and update action
     * dispatched from Form component
     * @param event Custom event from dispatch
     */
     const formActionResult = (event: CustomEvent) => {
        const { result } = event.detail;
        console.log("formActionResult: ", result);
        const { success } = result.data;
        if(success) {
            console.log("success", success);
        } 
    }
</script>

<svelte:head>
    <title>Kontakt</title>
</svelte:head>

<section class="section section-one">
    <h1 class="decorator">Terminvereinbarung</h1>
    <Form on:formaction={formActionResult} action="{action}">
       

        <div class="block">
            <label for="serviceType">Erstgespräch oder Termin
                <Dropdown id={"serviceType"} options={
                    [{id:1,key:"Terminanfrage", value:"Terminanfrage"},{id:2, key:"Erstgespräch", value:"kostenloses Erstgespräch"}]} 
                    on:change={(e)=>{console.log(e)}} >
                </Dropdown>
            </label>
            <label for="hypnoseLeistungen"> Leistung
                <Dropdown id={"hypnoseLeistungen"} on:change={(e)=>{console.log(e)}} ></Dropdown>
            </label>
            <input id="id" type="{action==='update'?'text':'hidden'}" name="id" readonly  />
            <label for="url"> Nachname
                <input type="text" id="lastName" name="lastName" placeholder="" required on:input={(e)=>{lastnameError=validate(e)}}/>
                <FormError {form} field="lastName" error={lastnameError} />
            </label>
            <label for="name"> Vorname
                <input type="text" id="firstName" name="firstName" placeholder="" required on:input={(e)=>{firstnameError=validate(e)}}/>
                <FormError {form} field="firstName" error={firstnameError} />
            </label>
            <label for="name"> Email
                <input type="text" id="email" name="email" placeholder="" required on:input={(e)=>{emailError=validate(e)}}/>
                <FormError {form} field="email" error={emailError} />
            </label>
            <label for="name"> Telefon
                <input type="text" id="phone" name="phone" placeholder="" required on:input={(e)=>{phoneError=validate(e)}}/>
                <FormError {form} field="phone" error={phoneError} />
            </label>
            <label for="contact_callback">
                <Checkbox id="contact_callback" labelText="Bitte um Rückruf"></Checkbox>
            </label>
        </div>
        <button type="submit">Abschicken</button>
        {#if form?.prismaError}
            <FormError error={form?.prismaError} />
        {/if}
    </Form>
</section>

<style lang="scss">
    .section {
        position: relative;
        min-height: 100vh;
        height: 100%;
        width: 100%;
        min-width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .decorator {
        margin-top: 100px;
    }
</style>
