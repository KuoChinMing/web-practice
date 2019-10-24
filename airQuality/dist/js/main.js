const card={props:["data","stared"],template:"#card",methods:{star(){this.$emit("star",this.data)}},computed:{status(){switch(this.data.Status){case"普通":return"status-normal";case"對敏感族群不健康":return"status-minor-unhealthy";case"對所有族群不健康":return"status-unhealthy";case"非常不健康":return"status-very-unhealthy";case"危害":return"status-danger";default:return}}}};new Vue({el:"#app",data:{location:[],staredData:[],data:[],filterWord:"all"},methods:{star(t){this.staredData.find(a=>a.SiteId===t.SiteId)?this.staredData=this.staredData.filter(a=>a.SiteId!==t.SiteId):this.staredData.push(t)}},watch:{staredData(){localStorage.setItem("staredData",JSON.stringify(this.staredData))}},computed:{filteredData(){return"all"===this.filterWord?this.data:this.data.filter(t=>t.County===this.filterWord)}},created(){const t=new XMLHttpRequest;t.open("GET","http://opendata2.epa.gov.tw/AQI.json"),t.send(),t.onload=t=>{const a=JSON.parse(t.currentTarget.response);this.data=a,this.staredData=JSON.parse(localStorage.getItem("staredData"))||[],a.forEach(t=>{this.location.includes(t.County)||this.location.push(t.County),this.staredData.forEach(a=>{a.SiteId===t.SiteId&&(a=t)})})}},components:{card:card}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY2FyZCIsInByb3BzIiwidGVtcGxhdGUiLCJtZXRob2RzIiwiW29iamVjdCBPYmplY3RdIiwidGhpcyIsIiRlbWl0IiwiZGF0YSIsImNvbXB1dGVkIiwiU3RhdHVzIiwiVnVlIiwiZWwiLCJsb2NhdGlvbiIsInN0YXJlZERhdGEiLCJmaWx0ZXJXb3JkIiwiZmluZCIsIml0ZW0iLCJTaXRlSWQiLCJmaWx0ZXIiLCJwdXNoIiwid2F0Y2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIkNvdW50eSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJvbmxvYWQiLCJyZXN1bHQiLCJyZXNwb25zZSIsInBhcnNlIiwiY3VycmVudFRhcmdldCIsImdldEl0ZW0iLCJmb3JFYWNoIiwiaW5jbHVkZXMiLCJjb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxLQUFPLENBQ1hDLE1BQU8sQ0FBQyxPQUFRLFVBQ2hCQyxTQUFVLFFBQ1ZDLFFBQVMsQ0FDUEMsT0FDRUMsS0FBS0MsTUFBTSxPQUFRRCxLQUFLRSxRQUc1QkMsU0FBVSxDQUNSSixTQUNFLE9BQVFDLEtBQUtFLEtBQUtFLFFBQ2hCLElBQUssS0FDSCxNQUFPLGdCQUNULElBQUssV0FDSCxNQUFPLHlCQUNULElBQUssV0FDSCxNQUFPLG1CQUNULElBQUssUUFDSCxNQUFPLHdCQUNULElBQUssS0FDSCxNQUFPLGdCQUNULFFBQ0UsV0FNVixJQUFJQyxJQUFJLENBQ05DLEdBQUksT0FDSkosS0FBTSxDQUNKSyxTQUFVLEdBQ1ZDLFdBQVksR0FDWk4sS0FBTSxHQUNOTyxXQUFZLE9BRWRYLFFBQVMsQ0FDUEMsS0FBS0csR0FDRUYsS0FBS1EsV0FBV0UsS0FBS0MsR0FBUUEsRUFBS0MsU0FBV1YsRUFBS1UsUUFHckRaLEtBQUtRLFdBQWFSLEtBQUtRLFdBQVdLLE9BQU9GLEdBQVFBLEVBQUtDLFNBQVdWLEVBQUtVLFFBRnRFWixLQUFLUSxXQUFXTSxLQUFLWixLQU0zQmEsTUFBTyxDQUNMaEIsYUFDRWlCLGFBQWFDLFFBQVEsYUFBY0MsS0FBS0MsVUFBVW5CLEtBQUtRLGVBRzNETCxTQUFVLENBQ1JKLGVBQ0UsTUFBd0IsUUFBcEJDLEtBQUtTLFdBQ0FULEtBQUtFLEtBRVBGLEtBQUtFLEtBQUtXLE9BQU9GLEdBQVFBLEVBQUtTLFNBQVdwQixLQUFLUyxjQUd6RFYsVUFDRSxNQUNNc0IsRUFBTSxJQUFJQyxlQUNoQkQsRUFBSUUsS0FBSyxNQUZHLHdDQUdaRixFQUFJRyxPQUNKSCxFQUFJSSxPQUFVQyxJQUNaLE1BQU1DLEVBQVdULEtBQUtVLE1BQU1GLEVBQU9HLGNBQWNGLFVBQ2pEM0IsS0FBS0UsS0FBT3lCLEVBQ1ozQixLQUFLUSxXQUFhVSxLQUFLVSxNQUFNWixhQUFhYyxRQUFRLGdCQUFrQixHQUNwRUgsRUFBU0ksUUFBUTdCLElBQ1ZGLEtBQUtPLFNBQVN5QixTQUFTOUIsRUFBS2tCLFNBQy9CcEIsS0FBS08sU0FBU08sS0FBS1osRUFBS2tCLFFBRzFCcEIsS0FBS1EsV0FBV3VCLFFBQVFwQixJQUNsQkEsRUFBS0MsU0FBV1YsRUFBS1UsU0FDdkJELEVBQU9ULFNBTWpCK0IsV0FBWSxDQUNWdEMsS0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhcmQgPSB7XG4gIHByb3BzOiBbJ2RhdGEnLCAnc3RhcmVkJ10sXG4gIHRlbXBsYXRlOiAnI2NhcmQnLFxuICBtZXRob2RzOiB7XG4gICAgc3RhcigpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3N0YXInLCB0aGlzLmRhdGEpO1xuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgc3RhdHVzKCkge1xuICAgICAgc3dpdGNoICh0aGlzLmRhdGEuU3RhdHVzKSB7XG4gICAgICAgIGNhc2UgJ+aZrumAmic6XG4gICAgICAgICAgcmV0dXJuICdzdGF0dXMtbm9ybWFsJztcbiAgICAgICAgY2FzZSAn5bCN5pWP5oSf5peP576k5LiN5YGl5bq3JzpcbiAgICAgICAgICByZXR1cm4gJ3N0YXR1cy1taW5vci11bmhlYWx0aHknO1xuICAgICAgICBjYXNlICflsI3miYDmnInml4/nvqTkuI3lgaXlurcnOlxuICAgICAgICAgIHJldHVybiAnc3RhdHVzLXVuaGVhbHRoeSc7XG4gICAgICAgIGNhc2UgJ+mdnuW4uOS4jeWBpeW6tyc6XG4gICAgICAgICAgcmV0dXJuICdzdGF0dXMtdmVyeS11bmhlYWx0aHknO1xuICAgICAgICBjYXNlICfljbHlrrMnOlxuICAgICAgICAgIHJldHVybiAnc3RhdHVzLWRhbmdlcic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn1cblxubmV3IFZ1ZSh7XG4gIGVsOiAnI2FwcCcsXG4gIGRhdGE6IHtcbiAgICBsb2NhdGlvbjogW10sXG4gICAgc3RhcmVkRGF0YTogW10sXG4gICAgZGF0YTogW10sXG4gICAgZmlsdGVyV29yZDogJ2FsbCcsXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzdGFyKGRhdGEpIHtcbiAgICAgIGlmICghdGhpcy5zdGFyZWREYXRhLmZpbmQoaXRlbSA9PiBpdGVtLlNpdGVJZCA9PT0gZGF0YS5TaXRlSWQpKSB7XG4gICAgICAgIHRoaXMuc3RhcmVkRGF0YS5wdXNoKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGFyZWREYXRhID0gdGhpcy5zdGFyZWREYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uU2l0ZUlkICE9PSBkYXRhLlNpdGVJZCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBzdGFyZWREYXRhKCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXJlZERhdGEnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXJlZERhdGEpKTtcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZmlsdGVyZWREYXRhKCkge1xuICAgICAgaWYgKHRoaXMuZmlsdGVyV29yZCA9PT0gJ2FsbCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5Db3VudHkgPT09IHRoaXMuZmlsdGVyV29yZCk7XG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICBjb25zdCBhcGkgPSAnaHR0cDovL29wZW5kYXRhMi5lcGEuZ292LnR3L0FRSS5qc29uJztcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbignR0VUJywgYXBpKTtcbiAgICB4aHIuc2VuZCgpO1xuICAgIHhoci5vbmxvYWQgPSAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzdWx0LmN1cnJlbnRUYXJnZXQucmVzcG9uc2UpO1xuICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLnN0YXJlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFyZWREYXRhJykpIHx8IFtdO1xuICAgICAgcmVzcG9uc2UuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmxvY2F0aW9uLmluY2x1ZGVzKGRhdGEuQ291bnR5KSkge1xuICAgICAgICAgIHRoaXMubG9jYXRpb24ucHVzaChkYXRhLkNvdW50eSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIHN0YXJlZERhdGFcbiAgICAgICAgdGhpcy5zdGFyZWREYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uU2l0ZUlkID09PSBkYXRhLlNpdGVJZCkge1xuICAgICAgICAgICAgaXRlbSA9IGRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIGNhcmQsXG4gIH0sXG59KTtcbiJdfQ==
