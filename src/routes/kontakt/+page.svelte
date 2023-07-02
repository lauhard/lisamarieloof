<script lang="ts">
	import FormError from '$lib/components/FormError.svelte';
	import Form from '$lib/components/Form.svelte';
    import type { ActionData, PageServerData } from "./$types";
    import { validate } from "$lib/zod/helper/forms.js";
    import Dropdown from '$lib/components/Dropdown.svelte';
    import Checkbox from '$lib/components/Checkbox.svelte';
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

<section class="section">
       <div class="grid">
            <div class="cell contact-form">
                <h2 class="decorator">Terminanfrage</h2>
                <p>
                    Schicken Sie eine unverbindliche Anfrage für Ihr kostenloses Erstgespräch oder einen Termin.
                </p>
                <Form on:formaction={formActionResult} --form-width="100%" action="{action}">
                    <div class="block">
                        <label for="serviceType">Wählen Sie einen Termintyp
                            <Dropdown id={"serviceType"} options={
                                [{id:1,key:"Terminanfrage", value:"Terminanfrage"},{id:2, key:"Erstgespräch", value:"kostenloses Erstgespräch"}]} 
                                on:change={(e)=>{console.log(e)}} >
                            </Dropdown>
                        </label>
                        <label for="hypnoseLeistungen"> Wählen Sie eine Leistung
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
            </div>
       </div>
</section>

<style lang="scss"> 
    .section {
        --section-min-height: 100vh;
        --section-height: 100%;
        --section-width: 100%;
        --section-margin: 90px 0 0 0;
        --section-padding: 0 0 0 0;
        // --bg-section: rgb(0, 26, 255);
        height: var(--section-height);
        min-height: var(--section-min-height);
        width: var(--section-width);
        margin: var(--section-margin);
        padding: var(--section-padding);
        background-color: var(--bg-section);
        position: relative;
    }
    .grid {
        // --bg-grid: #cf2ccce2;
        // --bg-grid-cell: #00ffc8;
        // --bg-current-cell: red;

        --grid-columns-desktop: repeat(2, 50vw, 50vw);
        // --grid-columns-desktop:repeat(auto-fill, minmax(400px, 1fr));
        --grid-rows-desktop: auto;
        --grid-rows-mobile: 210px 240px 380px auto;
        --grid-template-desktop: "heading heading image image"
            "heading heading image image";

        --grid-template-mobile: "";

        // --grid-gap: 10px;
        --grid-row-gap: 2rem;
        --grid-height: auto;
        --grid-min-height: 100%;
        // --grid-padding: 10px 0 0 0;
        --grid-width: 100%;

        padding: var(--grid-padding);
        background-color: var(--bg-grid);
        min-height: var(--grid-min-height);
        height: var(--grid-height);
        width: var(--grid-width);

        grid-gap: var(--grid-gap, 0px);
        grid-row-gap: var(--grid-row-gap, 0px);
        grid-template-columns: var(--grid-columns-desktop);
        grid-template-rows: var(--grid-rows-desktop);

        box-sizing: border-box;
        overflow: hidden;
    }
    .cell {
        background-color: var(--bg-grid-cell, transparent);
        margin: 0;
        padding: 0;
        height: auto;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        min-height: auto;
    }

    // .decorator {
    //     margin-top: 100px;
    // }
    .contact-form{
        margin-top: 3rem;
        max-width: var(--content-width);
        justify-self: center;
        padding: 0 2rem;
        :global(.block){
            width: 100%;
        }
        h2{
            text-align:  center;
            margin-bottom: 2rem;
        }
        .block{
            margin-top: 2rem;
        }
    }
</style>
