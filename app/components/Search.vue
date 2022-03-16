<template>
  <Page>
    <ActionBar style="background: #fff; box-shadow: none;">
      <FlexboxLayout alignItems="center" style="margin-top: 30px;">
        <Label color="#4f4f4f" style="font-size: 18px; text-align: center;" width="10%" @tap="$navigator.navigate('/home')">
          <FormattedString>
            <Span class="fas" text.decode="&#xf060;"/>
          </FormattedString>
        </Label>
        <StackLayout verticalAlignment="center" width="90%">
          <TextField height="50" hint="Search" class="input-search"/>
        </StackLayout>
      </FlexboxLayout>
    </ActionBar>

    <StackLayout style="margin: 40px;">
      <FlexboxLayout style="margin: 20px; margin-bottom: 40px;">
        <Label text="Suggested" color="#3f3f3f"></Label>
      </FlexboxLayout>
      <ScrollView>
        <StackLayout orientation="vertical" style="margin: 0px 30px">
          <FlexboxLayout v-for="(item, index) in contacts" :key="index">
            <FlexboxLayout @tap="$navigator.navigate('/messenger')">
              <FlexboxLayout width="50" height="50" style="padding: 15px;">
                <StackLayout class="avatar">
                  <StackLayout
                    backgroundColor="#880ED4"
                    height="100%" width="100%"
                    style="border-radius: 50%; display: flex; flex-direction: column; justify-content: center; padding-top: 13px;"
                  >
                    <Label style="font-size: 18px; color: white; text-align: center;"
                      :text="`${item.first_name.charAt(0)}${item.last_name.charAt(0)}`"
                    />
                  </StackLayout>
                </StackLayout>
              </FlexboxLayout>
              <FlexboxLayout flexDirection="column" style="padding: 15px; margin-top: 25px;">
                <FlexboxLayout justifyContent="space-between">
                  <Label :class="item.viewed === false ? 'black-text' : ''" width="70%"
                    fontWeight="bold" style="font-size: 14px;"
                    :text="`${item.first_name} ${item.last_name}`"
                  />
                </FlexboxLayout>
              </FlexboxLayout>
            </FlexboxLayout>
          </FlexboxLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>

  </Page>
</template>

<script>
  // import { mapActions, mapMutations } from 'vuex'
  export default {
    data:() => ({
      msg: 'Hello World!',
      form:{},
      contacts: [
        {
          first_name: 'Princess',
          last_name: 'Garde'
        },
        {
          first_name: 'Alan',
          last_name: 'Golpeo'
        },
        {
          first_name: 'Raymund',
          last_name: 'Hinlog'
        },
        {
          first_name: 'Test',
          last_name: 'User'
        }
      ]
    }),
    methods: {

    }
  }
</script>
