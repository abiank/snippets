my_values = [
    ['one'],
    ['two'],
    ['three'],
    ['four'],
    ['five']
];


numberField = new Ext.form.ComboBox({
    fieldLabel: 'Number',
    hiddenName: 'number',
    store: new Ext.data.SimpleStore({
        fields: ['number'],
        data : my_values 
    }),
    displayField: 'number',
    typeAhead: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText:'Choose number...',
    selectOnFocus:true
});

tb.insert(0, numberField)

